import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import Router from './utils/Router';
import { UserProfilePage } from './pages/UserProfile';
import AuthController from './controllers/AuthController';

enum Routes {
  Index = '/',
  Register = '/register',
  Profile = '/profile'
}

window.addEventListener('DOMContentLoaded', async () => {
  Router.use(Routes.Index, LoginPage)
    .use(Routes.Register, RegisterPage)
    .use(Routes.Profile, UserProfilePage)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Profile)
    }
  } catch (e) {
    Router.start();

    // if (isProtectedRoute) {
    //   Router.go(Routes.Index);
    // }
  }

});
