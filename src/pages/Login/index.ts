

import Block from '../../utils/Block';
import template from './login.pug';
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';
import { SigninData } from '../../api/AuthAPI';
import AuthController from '../../controllers/AuthController';

interface LoginPageProps {
  title: string,
  authStatus: string,
  authMessage: string,
}

export class LoginPage extends Block {
  constructor(props: LoginPageProps) {
    super(props);
  }

  init() {
    this.children.inputName = new InputBox({
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

    // this.children.exitButton = new Button({
    //   mode: "btn",
    //   type: "button",
    //   text: "Выйти",
    //   mainClasses: "btn_theme-primary btn_full-width btn_margin-b-xs",
    //   events: {
    //     click: () => {
    //       AuthController.logout();
    //     },
    //   },
    // });
  }

  submit() {
    let validateError = false;
    const submitData: Record<string, string> = {}

    Object.keys(this.children).forEach(key => {
      if (this.children[key] instanceof InputBox) {
        // @ts-ignore
        submitData[this.children[key].props.name] = this.children[key].props.value;

        // @ts-ignore
        if (!this.children[key].props.isValid) {
          validateError = true;
          // @ts-ignore
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
    // @ts-ignore
    AuthController.signin(submitData as SigninData);
  }

  render() {
    return this.compile(template, this.props);
  }
}
