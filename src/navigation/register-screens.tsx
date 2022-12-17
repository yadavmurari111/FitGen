import ROUTE_NAME from './navigation-constants';
import {Navigation} from 'react-native-navigation';
import App from '../../App';

const registerAppScreens = () => {
  Navigation.registerComponent(ROUTE_NAME.APP, () => App);
};
export default registerAppScreens;
