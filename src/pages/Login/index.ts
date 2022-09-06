

import Block from '../../utils/Block';
import template from './login.pug';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

interface LoginPageProps {
  title: string,
}

export class LoginPage extends Block {
  constructor(props: LoginPageProps) {
    super('div', props);
  }

  init() {
    this.children.inputName = new Input({
      data: {type: "text", name:"name", placeholder:"Логин", title:"Логин", mainClasses: "input-box_margin-b-xs"},
      events: {
        click: () => console.log('clicked'),
      },
    });

    this.children.inputPassword = new Input({
      data: {type: "password", name:"password", placeholder:"Пароль", title:"Пароль", mainClasses: "input-box_password input-box_margin-b-xs"},
      events: {
        click: () => console.log('clicked'),
      },
    });

    this.children.loginButton = new Button({
      data: {mode: "btn", type: "submit", text: "Авторизоваться", mainClasses: "btn_theme-primary btn_full-width btn_margin-b-xs"},
      events: {
        click: () => console.log('clicked'),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
