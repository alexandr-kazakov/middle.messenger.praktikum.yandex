
import router from '../utils/Router';
import API, { UserApi } from '../api/UserAPI';
import AuthController from './AuthController';


export class UserController {
  private readonly api: UserApi;

  constructor() {
    this.api = API;
  }

  async changeProfile(data: any) {
    try {
      await this.api.changeProfile(data);

      await AuthController.fetchUser()

      router.go('/profile');
    } catch (e: any) {
      console.log(e.reason);
    }
  }

}

export default new UserController();
