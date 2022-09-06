import Block from '../../utils/Block';
import template from './input-box.pug';
import { Input } from '../../components/Input';

interface InputBoxProps {
  data: object,
  events: {
    // click: () => void;
  };
}

export class InputBox extends Block {
  constructor(props: InputBoxProps) {
    super('div', props);
  }

  init() {
    this.children.input = new Input({
      data: {type: "text", name:"name", placeholder:"Логин", title:"Логин", mainClasses: "input-box_margin-b-xs"},
      events: {
        focus: () => console.log('focusss'),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
