import { ChatPage } from './pages/Chat';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;

  const chatPage = new ChatPage({});

  root.append(chatPage.getContent()!);

  chatPage.dispatchComponentDidMount();
});


