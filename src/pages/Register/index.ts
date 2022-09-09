

import Block from '../../utils/Block';
import template from './register.pug';
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';

interface RegisterPageProps {
  title: string,
  authStatus: string,
  authMessage: string,
}

export class RegisterPage extends Block {
  constructor(props: RegisterPageProps) {
    super(props);
  }

  init() {
    this.children.inputEmail = new InputBox({
      type: "text",
      name: "email",
      placeholder: "Почта",
      title: "Почта",
      mainClasses: "input-box_margin-b-xs",
      errorMessage: "Веедите корректный емайл",
      isValid: false,
      value: null,
      errorMessageVisibility: false,
    });

    this.children.inputLogin = new InputBox({
      type: "text",
      name: "login",
      placeholder: "Логин",
      title: "Логин",
      mainClasses: "input-box_margin-b-xs",
      errorMessage: "от 3 до 20 символов, латиница",
      isValid: false,
      value: null,
      errorMessageVisibility: false,
    });

    this.children.inputName = new InputBox({
      type: "text",
      name: "first_name",
      placeholder: "Имя",
      title: "Имя",
      mainClasses: "input-box_margin-b-xs",
      errorMessage: "латиница или кириллица, первая заглавная",
      isValid: false,
      value: null,
      errorMessageVisibility: false,
    });

    this.children.inputLastName = new InputBox({
      type: "text",
      name: "second_name",
      placeholder: "Фамилия",
      title: "Фамилия",
      mainClasses: "input-box_margin-b-xs",
      errorMessage: "латиница или кириллица, первая заглавная",
      isValid: false,
      value: null,
      errorMessageVisibility: false,
    });

    this.children.inputPhone = new InputBox({
      type: "tel",
      name: "phone",
      placeholder: "Телефон",
      title: "Телефон",
      mainClasses: "input-box_margin-b-xs",
      errorMessage: "от 10 до 15 символовб цифры",
      isValid: false,
      value: null,
      errorMessageVisibility: false,
    });

    this.children.inputPassword = new InputBox({
      type: "password",
      name: "password",
      placeholder: "Пароль",
      title: "Пароль",
      mainClasses: "input-box_password input-box_margin-b-xs",
      errorMessage: "от 8 до 40 символов, заглавная, цифра",
      isValid: false,
      value: null,
      errorMessageVisibility: false,
    });

    this.children.inputPasswordConfirm = new InputBox({
      type: "password",
      name: "password",
      placeholder: "Повторите пароль",
      title: "Повторите пароль",
      mainClasses: "input-box_password input-box_margin-b-xs",
      errorMessage: "от 8 до 40 символов, заглавная, цифра",
      isValid: false,
      value: null,
      errorMessageVisibility: false,
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
    let validateError = false;
    const submitData: Record<string, string> = {}

    Object.keys(this.children).forEach(key => {
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
