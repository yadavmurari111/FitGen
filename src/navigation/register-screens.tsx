import ROUTE_NAME from './navigation-constants';
import {Navigation} from 'react-native-navigation';
import App from '../../App';
import UserHomeComponent from '../pages/user-home/user-home.component';

const registerAppScreens = () => {
  Navigation.registerComponent(ROUTE_NAME.APP, () => App);
  Navigation.registerComponent(ROUTE_NAME.APP_HOME, () => UserHomeComponent);
};
export default registerAppScreens;
