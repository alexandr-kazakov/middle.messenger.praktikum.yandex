

import Block from '../../utils/Block';
import template from './user-profile.pug';
import { Button } from '../../components/Button';
import { ButtonSidebar } from '../../components/ButtonSidebar';
import { withStore } from '../../utils/Store';
import AuthController from '../../controllers/AuthController';
import { User } from '../../api/AuthAPI';
import { ProfileItem } from '../../components/ProfileItem';
import UserController from "../../controllers/UserController";
import { InputBox } from '../../components/InputBox';


type UserProfileProps = User

const userDataArray = ['id', 'first_name', 'second_name', 'display_name', 'login', 'avatar', 'email', 'phone'] as Array<keyof UserProfileProps>;


class UserProfilePageBase extends Block {
  init() {
    // @ts-ignore
    this.children.buttonSidebar = new ButtonSidebar({
      events: {
        click: () => console.log('clicked'),
      },
    });

    this.children.fields = userDataArray.map(name => {
      const resp = new ProfileItem({ name, value: this.props[name] });
      console.log(949494949, resp);
      return resp

    });


    this.children.logoutButton = new Button({
      mode: 'btn',
      type: "button",
      text: "Выйти",
      mainClasses: "btn_theme-primary btn_full-width btn_margin-b-xs",
      events: {
        click: () => {
          AuthController.logout();
        }
      }
    })

    this.children.btnEditData = new Button({
      mode: "btn",
      type: "submit",
      text: "Изменить данные",
      mainClasses: "btn_theme-primary btn_full-width btn_margin-b-xs",
      events: {
        click: () => {
          const body = document.querySelector('#bodyApp');
          body?.classList.add('modal-mode')

          const modal = document.querySelector('#editUserDataModal');
          modal?.classList.add('show');
        },
      },
    });

    this.children.modalUpdateUserDataBtn = new Button({
      mode: "btn",
      type: "button",
      text: "Обновить даныне",
      mainClasses: "btn_theme-primary btn_full-width",
      events: {
        click: () => {
          const body = document.querySelector('#bodyApp');
          body?.classList.remove('modal-mode')

          const modal = document.querySelector('#editUserDataModal');
          modal?.classList.remove('show');

          this.submit();
        },
      },
    });

    this.children.modalCloseBtn = new Button({
      mode: "btn",
      type: "button",
      text: "✕",
      mainClasses: "btn_close-theme",
      events: {
        click: () => {
          const body = document.querySelector('#bodyApp');
          body?.classList.remove('modal-mode')

          const modal = document.querySelector('#editUserDataModal');
          modal?.classList.remove('show');
        },
      },
    });

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

  }

  submit() {
    console.log('SUb,int, Submit');

    let validateError = false;
    const submitData: Record<string, string> = {};

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
    submitData.display_name = submitData.login;
    // @ts-ignore
    UserController.changeProfile(submitData as any);
  }


  // @ts-ignore
  protected componentDidUpdate(oldProps: UserProfileProps, newProps: UserProfileProps): boolean {
    (this.children.fields as ProfileItem[]).forEach((field, i) => {
      field.setProps({ value: newProps[userDataArray[i]] });
    });

    return false;
  }

  render() {
    return this.compile(template, this.props);
  }
}


const withUser = withStore((state) => ({ ...state.user }))
// @ts-ignore
export const UserProfilePage = withUser(UserProfilePageBase);
