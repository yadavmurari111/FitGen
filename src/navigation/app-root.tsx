import ROUTE_NAME from './navigation-constants';
import {Navigation} from 'react-native-navigation';

export const setRoute = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: ROUTE_NAME.APP_ROUTE,
            },
          },
        ],
      },
    },
  });
export const setWelcomeRoute = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: ROUTE_NAME.WELCOME_SCREEN,
            },
          },
        ],
      },
    },
  });

export const goToHome = () =>
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
                    name: ROUTE_NAME.APP_HOME,
                  },
                },
              ],

              options: {
                bottomTab: {
                  text: 'Home',
                  selectedIconColor: 'blue',
                  selectedTextColor: 'blue',
                  icon: require('../assets/icons/bottom-tabs-icons/home.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'SEARCH_TAB',
              children: [
                {
                  component: {
                    id: 'SEARCH_SCREEN',
                    name: ROUTE_NAME.APP,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Search',
                  selectedIconColor: 'blue',
                  selectedTextColor: 'blue',
                  icon: require('../assets/icons/bottom-tabs-icons/search-icon.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'SEARCH_TAB',
              children: [
                {
                  component: {
                    id: 'SEARCH_SCREEN',
                    name: ROUTE_NAME.APP,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Notification',
                  selectedIconColor: 'blue',
                  selectedTextColor: 'blue',
                  icon: require('../assets/icons/bottom-tabs-icons/notification-bell.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'SEARCH_TAB',
              children: [
                {
                  component: {
                    id: 'SEARCH_SCREEN',
                    name: ROUTE_NAME.APP,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Profile',
                  selectedIconColor: 'blue',
                  selectedTextColor: 'blue',
                  icon: require('../assets/icons/bottom-tabs-icons/account-icon.png'),
                },
              },
            },
          },
        ],
      },
    },
  });
