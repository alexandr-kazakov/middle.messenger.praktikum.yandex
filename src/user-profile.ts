import { HomePage } from './pages/UserProfile';
import { Button } from './components/Button';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;

  const homePage = new HomePage({ title: 'Home page', userData: [{title: "Почта", value: "pochta@yandex.ru"}, {title: "Логин", value: "ivanivanov"},  {title: "Имя", value: "Иван"},  {title: "Фамилия", value: "Иванов"},  {title: "Имя в чате", value: "Иван"}, {title: "Телефон", value: "+7 (909) 967 30 30"} ] });

  root.append(homePage.getContent()!);

  homePage.dispatchComponentDidMount();
});


