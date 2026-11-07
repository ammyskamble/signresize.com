import { MAX_UPLOAD_BYTES } from './uploadValidation';

export type BackgroundMode = 'signature' | 'photo' | 'document';
export interface BackgroundTransfer {
  id: string;
  blob: Blob;
  mode: BackgroundMode;
  createdAt: number;
}
const DATABASE = 'signresize-background-transfer';
const STORE = 'images';
export const TRANSFER_TTL = 10 * 60 * 1000;
export const TRANSFER_HASH = '#background-edit=';

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!globalThis.indexedDB) { reject(new Error('Local image transfer is unavailable. Download the result and open it in the resizer.')); return; }
    const request = indexedDB.open(DATABASE, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE, { keyPath: 'id' });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(new Error('Could not open local image storage. Download the result and open it in the resizer.'));
    request.onblocked = () => reject(new Error('Local image storage is busy. Close other editor tabs and retry.'));
  });
}

export function transferDestination(mode: BackgroundMode, id: string): string {
  const path = mode === 'photo' ? '/photo-resizer/' : mode === 'document' ? '/document-resizer/' : '/';
  return `${path}${TRANSFER_HASH}${encodeURIComponent(id)}`;
}

export async function saveBackgroundTransfer(blob: Blob, mode: BackgroundMode): Promise<string> {
  if (!blob.size || blob.size > MAX_UPLOAD_BYTES || blob.type !== 'image/png') {
    throw new Error('The resizer accepts images up to 15 MB. Download this result, reduce its dimensions and try again.');
  }
  const db = await openDatabase();
  const id = crypto.randomUUID();
  try {
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE, 'readwrite');
      const store = transaction.objectStore(STORE);
      const cursor = store.openCursor();
      cursor.onsuccess = () => {
        const item = cursor.result;
        if (!item) return;
        if (!item.value.createdAt || Date.now() - item.value.createdAt > TRANSFER_TTL) item.delete();
        item.continue();
      };
      store.put({ id, blob, mode, createdAt: Date.now() } satisfies BackgroundTransfer);
      transaction.oncomplete = () => resolve();
      transaction.onerror = transaction.onabort = () => reject(new Error('Could not save the image locally. Download it and open it in the resizer.'));
    });
    return transferDestination(mode, id);
  } finally { db.close(); }
}

// Read and delete in one transaction: the temporary image is consumed once.
export async function takeBackgroundTransfer(id: string): Promise<BackgroundTransfer> {
  if (!/^[a-f0-9-]{36}$/i.test(id)) throw new Error('This image transfer link is invalid. Return to the remover and try again.');
  const db = await openDatabase();
  try {
    const value = await new Promise<BackgroundTransfer | undefined>((resolve, reject) => {
      const transaction = db.transaction(STORE, 'readwrite');
      const store = transaction.objectStore(STORE);
      const request = store.get(id);
      request.onsuccess = () => store.delete(id);
      transaction.oncomplete = () => resolve(request.result);
      transaction.onerror = transaction.onabort = () => reject(new Error('Could not read the local image. Return to the remover and retry.'));
    });
    if (!value || !Number.isFinite(value.createdAt) || value.createdAt > Date.now() || Date.now() - value.createdAt > TRANSFER_TTL || !(value.blob instanceof Blob)
      || !value.blob.size || value.blob.size > MAX_UPLOAD_BYTES || value.blob.type !== 'image/png'
      || !['signature', 'photo', 'document'].includes(value.mode)) {
      throw new Error('This temporary image has expired or was already opened. Return to the remover and send it again.');
    }
    return value;
  } finally { db.close(); }
}
