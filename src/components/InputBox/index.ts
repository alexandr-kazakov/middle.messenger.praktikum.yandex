import Block from '../../utils/Block';
import template from './input-box.pug';
import { Input } from '../../components/Input';

interface InputBoxProps {
  type: any,
  name:any,
  placeholder:any,
  title:any,
  mainClasses:any
  events: {
    // click: () => void;
  };
}

export class InputBox extends Block {
  constructor(props: InputBoxProps) {
    super(props);
  }

  init() {
    console.log(444, JSON.stringify(this.props.name));
    this.children.input = new Input({
      type: this.props.type,
      name: this.props.name,
      placeholder: this.props.placeholder,
      title: this.props.title,
      mainClasses: "",
      events: {
        blur: () => {},
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
