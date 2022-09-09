import Block from '../../utils/Block';
import template from './input-box.pug';
import { Input } from '../../components/Input';
import InputsValidator from '../../utils/InputsValidator';

interface InputBoxProps {
  type: string,
  name: string,
  placeholder: string,
  title: string,
  mainClasses: string,
  errorMessage: string,
  isValid: boolean,
  value: any,
  errorMessageVisibility: boolean,
}


export class InputBox extends Block {
  constructor(props: InputBoxProps) {
    super(props);
  }

  init() {
    this.children.input = new Input({
      type: this.props.type,
      name: this.props.name,
      placeholder: this.props.placeholder,
      title: this.props.title,
      mainClasses: "",
      events: {
        blur: (event: any): void => {
          this.validateInput(event.target.name, event.target.value)
        },
      },
    });
  }

  validateInput(name: string, value: string) {
    const validator = new InputsValidator(name, value);
    const validStatus = validator.isValid();
    this.props.value = value;

    if (validStatus) {
      // document.getElementById(this.props.id)?.classList.remove('error');
      this.props.isValid = true;
      this.props.errorMessageVisibility = false;
    } else {
      // document.getElementById(this.props.id)?.classList.add('error');
      this.props.isValid = false;
      this.props.errorMessageVisibility = true;
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
