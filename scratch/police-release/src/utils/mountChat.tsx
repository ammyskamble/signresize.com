import { createRoot } from 'react-dom/client';
import ChatBot from '../components/ChatBot';

export function mountChat(host: HTMLElement) {
  createRoot(host).render(<ChatBot initialOpen />);
}
