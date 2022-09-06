import { LoginPage } from './pages/Login';
import { Button } from './components/Button';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;

  const loginPage = new LoginPage({ title: 'Вход'});

  root.append(loginPage.getContent()!);

  loginPage.dispatchComponentDidMount();
});


