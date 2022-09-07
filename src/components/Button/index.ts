import Block from '../../utils/Block';
import template from './button.pug';

interface ButtonProps {
  data: object;
  events: {
    click: () => void;
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
