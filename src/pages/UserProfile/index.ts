

import Block from '../../utils/Block';
import template from './user-profile.pug';
import { Button } from '../../components/Button';
import { ButtonSidebar } from '../../components/ButtonSidebar';
import { withStore } from '../../utils/Store';
import AuthController from '../../controllers/AuthController';
import { User } from '../../api/AuthAPI';
import { ProfileItem } from '../../components/ProfileItem';


type UserProfileProps = User

const userDataArray = ['id', 'first_name', 'second_name', 'display_name', 'login', 'avatar', 'email', 'phone'] as Array<keyof UserProfileProps>;


class UserProfilePageBase extends Block {
  init() {
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
  }

  protected componentDidUpdate(oldProps: UserProfileProps, newProps: UserProfileProps): boolean {
    (this.children.fields as ProfileItem[]).forEach((field, i) => {
      console.log(91919191919, field);

      field.setProps({ value: newProps[userDataArray[i]] });
    });

    return false;
  }

  render() {
    return this.compile(template, this.props);
  }
}


const withUser = withStore((state) => ({ ...state.user }))

export const UserProfilePage = withUser(UserProfilePageBase);
