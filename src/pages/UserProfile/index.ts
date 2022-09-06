

import Block from '../../utils/Block';
import template from './user-profile.pug';
// import { Button } from '../../components/Button';
import { ButtonSidebar } from '../../components/ButtonSidebar';

interface HomePageProps {
  title: string;
  userData: object[]
}

export class HomePage extends Block {
  constructor(props: HomePageProps) {
    super('div', props);
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
