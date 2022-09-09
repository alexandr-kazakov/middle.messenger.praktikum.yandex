import Block from '../../utils/Block';
import template from './button.pug';

interface ButtonProps {
  mode: string,
  type: string,
  text: string
  mainClasses: string,
  events?: {
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
