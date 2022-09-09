
export default class InputsValidator {
  private _type: string;
  private _data: string;

  constructor(type: string, data: string) {
    this._type = type;
    this._data = data;
  }

  isValid(): boolean {
    let pattern;

    switch (this._type) {
      case 'first_name': case 'second_name':
        pattern = /[A-ZА-Я][a-zа-я-]*/
        break;

      case 'email':
        pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z](?:[a-z-]*[a-z])?\.)+[a-z](?:[a-z-]*[a-z])?$/
        break;

      case 'phone':
        pattern = /\+?[0-9]{10,15}/;
        break;

      case 'password':
        pattern = /(?=.*[0-9])(?=.*[A-Z])[A-Za-z0-9]{8,40}/g;
        break;

      case 'login':
        pattern = /[A-Za-z0-9_-]{3,20}/;
        break;

      case 'message':
        pattern = /([^\s])/;
        break;

      default:
        return false
    }

    return pattern.test(this._data);
  }
}
