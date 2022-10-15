

import Block from '../../utils/Block';
import template from './user-profile.pug';
// import { Button } from '../../components/Button';
import { ButtonSidebar } from '../../components/ButtonSidebar';

interface UserProfileProps {
  title: string;
  userData: Record<string, string>[];
}

export class UserProfilePage extends Block {
  constructor(props: UserProfileProps) {
    super({ ...props });
  }

  init() {
    this.children.buttonSidebar = new ButtonSidebar({
      events: {
        click: () => console.log('clicked'),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
