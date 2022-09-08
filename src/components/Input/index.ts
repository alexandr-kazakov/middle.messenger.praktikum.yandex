import Block from '../../utils/Block';
import template from './input.pug';

interface InputProps {
  type: string,
  name: string,
  placeholder: string,
  title: string,
  mainClasses: string,
  events: {
    blur: (event: object) => void;
  };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
    });


  }

  // this.validateResponde() {

  // }

  // public onBlur() {
  //   console.log(555555, JSON.stringify(this.props));
  //   console.log('tuk-tuk');
  // }



  render() {
    return this.compile(template, this.props);
  }
}
