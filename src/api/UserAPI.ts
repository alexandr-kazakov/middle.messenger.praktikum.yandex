import HTTPTransport from '../utils/HTTPTransport';

interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export type ChangeProfileData = Omit<User, 'avatar' | 'id'>

export interface PasswordToChange {
  oldPassword: string;
  newPassword: string;
}

export class UserApi {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport('/user');
  }

  public changeProfile(data: ChangeProfileData) {
    return this.http.put('/profile', data);
  }

  public getUserById(id: string): Promise<User> {
    return this.http.get(`/${id}`);
  }

}

export default new UserApi();
