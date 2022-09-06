import Block from '../../utils/Block';
import template from './input.pug';

interface InputProps {
  data: object,
  events: {
    // click: () => void;
  };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
