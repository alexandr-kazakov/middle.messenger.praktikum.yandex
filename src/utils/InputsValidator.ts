export default class InputsValidator {
  type: string;
  data: string;

  constructor(type: string, data: string) {
    this.type = type;
    this.data = data;
  }

  isValid(): boolean {
    let pattern;

    switch (this.type) {
      case 'userName':
        pattern = /[A-ZА-Я][a-zа-я\-]*/
        break;

      case 'userEmail':
        pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z](?:[a-z-]*[a-z])?\.)+[a-z](?:[a-z-]*[a-z])?$/
        break;

      case 'userPhone':
        pattern = /\+?[0-9]{10,15}/;
        break;

      case 'password':
        pattern = /(?=.*[0-9])(?=.*[A-Z])[A-Za-z0-9]{8,40}/g;
        break;

      case 'login':
        pattern = /[A-Za-z0-9_\-]{3,20}/;
        break;

      case 'userMessage':
        pattern = /([^\s])/;
        break;

      default:
        return false
    }

    return pattern.test(this.data);
  }
}
