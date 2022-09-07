import Block from '../../utils/Block';
import template from './input.pug';

interface InputProps {
  type: any,
  name:any,
  placeholder:any,
  title:any,
  mainClasses:any,
  events: {
    blur: () => void;
    // click: () => void;
  };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({...props,
      events: {
      blur: () => this.onBlur(),
    }});
  }

  validateName(event:any): boolean {
    console.log(event,event.target.value);
    const reg = /^[a-zA-Z][\p{Cyrillic}]+$/;
    const response = reg.test(event.target.value);
    return response;
  }

  public onBlur() {
    console.log(555555, JSON.stringify(this.props));
    console.log('tuk-tuk');
  }

  render() {
    return this.compile(template, this.props);
  }
}
