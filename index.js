import {Navigation} from 'react-native-navigation';
import registerAppScreens from './src/navigation/register-screens';
import {setRoute} from './src/navigation/app-root';

registerAppScreens(); // register all the screens

Navigation.events().registerAppLaunchedListener(() => setRoute());

Navigation.setDefaultOptions({
  topBar: {visible: false},
  bottomTabs: {
    selectedIconColor: 'blue',
    titleDisplayMode: 'alwaysShow',
  },
});
