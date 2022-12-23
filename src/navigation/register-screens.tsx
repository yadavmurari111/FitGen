import ROUTE_NAME from './navigation-constants';
import {Navigation} from 'react-native-navigation';
import App from '../../App';
import UserHomeComponent from '../pages/user-home/user-home.component';
import WelcomeScreenComponent from '../pages/welcome-screen/welcome-screen.component';
import {Routes} from '../Routes';

const registerAppScreens = () => {
  Navigation.registerComponent(ROUTE_NAME.APP, () => App);
  Navigation.registerComponent(ROUTE_NAME.APP_ROUTE, () => Routes);

  // ================= //
  Navigation.registerComponent(
    ROUTE_NAME.WELCOME_SCREEN,
    () => WelcomeScreenComponent,
  );
  // ================= //
  Navigation.registerComponent(ROUTE_NAME.APP_HOME, () => UserHomeComponent);
};
export default registerAppScreens;
