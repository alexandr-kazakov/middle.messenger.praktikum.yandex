import Block from '../../utils/Block';
import template from './btn-sidebar.pug';

interface ButtonProps {
  events: {
    // click: () => void;
  };
}

export class ButtonSidebar extends Block {
  constructor(props: ButtonProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
