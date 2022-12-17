import {Navigation} from 'react-native-navigation';
import registerAppScreens from './src/navigation/register-screens';
import ROUTE_NAME from './src/navigation/navigation-constants';

registerAppScreens(); // register all the screens

Navigation.events().registerAppLaunchedListener(() =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        children: [
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    id: 'HOME_SCREEN',
                    name: ROUTE_NAME.APP,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  //icon: require('./home.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'PROFILE_TAB',
              children: [
                {
                  component: {
                    id: 'PROFILE_SCREEN',
                    name: ROUTE_NAME.APP,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  // icon: require('./profile.png'),
                },
              },
            },
          },
        ],
      },
    },
  }),
);
