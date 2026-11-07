// Local deployment workaround: keep Wrangler's authenticated upload workflow,
// but send smaller batches on connections that time out on 40 MiB requests.
// No installed dependency, file contents, hashes or deployed runtime are changed.
import { registerHooks } from 'node:module';
registerHooks({
  load(url, context, nextLoad) {
    const loaded = nextLoad(url, context);
    if (!url.replace(/\\/g, '/').endsWith('/node_modules/wrangler/wrangler-dist/cli.js')) return loaded;
    const source = typeof loaded.source === 'string' ? loaded.source : Buffer.from(loaded.source).toString('utf8');
    const original = 'MAX_BUCKET_SIZE = 40 * 1024 * 1024;';
    if (!source.includes(original)) throw new Error('This local upload workaround does not match the installed Wrangler version.');
    console.info('Using 1 MiB Pages asset-upload batches, one at a time, for this deployment.');
    return { ...loaded, source: source.replace(original, 'MAX_BUCKET_SIZE = 1024 * 1024;').replace('BULK_UPLOAD_CONCURRENCY2 = 3;', 'BULK_UPLOAD_CONCURRENCY2 = 1;').replace('logger2.debug("POST /pages/assets/upload");', 'console.info("Uploading Pages batch:", bucket.files.length, "files,", Math.round(Buffer.byteLength(JSON.stringify(payload)) / 1024), "KiB"); logger2.debug("POST /pages/assets/upload");') };
  },
});
