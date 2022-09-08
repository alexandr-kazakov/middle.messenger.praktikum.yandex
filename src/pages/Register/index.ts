

import Block from '../../utils/Block';
import template from './login.pug';
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';
import { nanoid } from 'nanoid';

interface RegisterageProps {
  title: string,
  authStatus: string,
  authMessage: string,
  events: {
    //  submit: () => void;
  };
}

export class LoginPage extends Block {
  constructor(props: RegisterageProps) {
    super(props);
  }

  init() {
    this.children.inputName = new InputBox({
      type: "text",
      name: "login",
      placeholder: "Логин",
      title: "Логин",
      mainClasses: "input-box_margin-b-xs",
      id: nanoid(6),
      errorMessage: "от 3 до 20 символов, латиница",
      isValid: false,
      errorMessageVisibility: false,
      events: {
      },
    });

    this.children.inputPassword = new InputBox({
      type: "password",
      name: "password",
      placeholder: "Пароль",
      title: "Пароль",
      mainClasses: "input-box_password input-box_margin-b-xs",
      id: nanoid(6),
      errorMessage: "от 8 до 40 символов",
      isValid: false,
      errorMessageVisibility: false,
      events: {

      },
    });


    this.children.loginButton = new Button({
      mode: "btn",
      type: "submit",
      text: "Авторизоваться",
      mainClasses: "btn_theme-primary btn_full-width btn_margin-b-xs",
      events: {
        click: () => {
          this.submit();
        },
      },
    });
  }

  submit() {
    let validateError: boolean;
    const submitData = {}

    Object.keys(this.children).forEach(key => {
      console.log('element111', this.children[key].props.isValid);

      if (this.children[key] instanceof InputBox) {
        submitData[key] = this.children[key].props.value;


        if (!this.children[key].props.isValid) {
          validateError = true;
          this.children[key].props.errorMessageVisibility = true;
          this.props.authStatus = 'error';
          this.props.authMessage = "Поля заполнены некорректно!";
        }
      }
    });

    if (!validateError) {
      this.props.authStatus = 'success';
      this.props.authMessage = "Поля заполнены верно!"
    }

    console.log('submitData: ', submitData);
  }

  render() {
    return this.compile(template, this.props);
  }
}
