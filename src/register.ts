import { RegisterPage } from './pages/Register';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;

  const registerPage = new RegisterPage({
    title: 'Регистрация',
    authStatus: '',
    authMessage: '',
  });

  root.append(registerPage.getContent()!);

  registerPage.dispatchComponentDidMount();
});


