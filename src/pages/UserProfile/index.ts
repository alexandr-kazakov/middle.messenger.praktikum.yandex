

import Block from '../../utils/Block';
import template from './user-profile.pug';
// import { Button } from '../../components/Button';
import { ButtonSidebar } from '../../components/ButtonSidebar';
import { withStore } from '../../utils/Store';
// import AuthController from '../../controllers/AuthController';
import { User } from '../../api/AuthAPI';
import { ProfileItem } from '../../components/ProfileItem';



type UserProfileProps = User

const userDataArray = ['id', 'first_name', 'second_name', 'display_name', 'login', 'avatar', 'email', 'phone'] as Array<keyof UserProfileProps>;


class UserProfilePageBase extends Block {
  // constructor(props: UserProfileProps) {
  //   super(props);
  // }

  init() {
    this.children.buttonSidebar = new ButtonSidebar({
      events: {
        click: () => console.log('clicked'),
      },
    });

    this.children.userData = userDataArray.map(name => {
      return new ProfileItem({ name, value: this.props[name] });
    });
  }

  protected componentDidUpdate(oldProps: UserProfileProps, newProps: UserProfileProps): boolean {

    (this.children.fields as ProfileItem[]).forEach((field, i) => {
      console.log(4747474747474747);

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
