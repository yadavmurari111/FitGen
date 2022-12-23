import ROUTE_NAME from './navigation-constants';
import {Navigation} from 'react-native-navigation';
import {presetBase} from '../utils/color';

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
        options: {topBar: {visible: false}},
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
                topBar: {
                  visible: true,
                  animate: true,
                  background: {color: presetBase.colors.white},
                },
                bottomTab: {
                  text: 'Exercises',
                  selectedFontSize: 13,
                  selectedTextColor: presetBase.colors.orangeBase,
                  icon: require('../assets/icons/bottom-tabs-icons/exercises2.png'),
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
                  text: 'Workout',
                  selectedFontSize: 13,
                  selectedTextColor: presetBase.colors.orangeBase,
                  icon: require('../assets/icons/bottom-tabs-icons/exercises.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'DIET_TAB',
              children: [
                {
                  component: {
                    id: 'DIET_SCREEN',
                    name: ROUTE_NAME.PLANNER_TAB,
                  },
                },
              ],
              options: {
                topBar: {
                  visible: true,
                  animate: true,
                  background: {color: presetBase.colors.white},
                },
                bottomTab: {
                  text: 'Diet',
                  selectedFontSize: 13,
                  selectedTextColor: presetBase.colors.orangeBase,
                  icon: require('../assets/icons/bottom-tabs-icons/routine-64.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'PLANNER_TAB',
              children: [
                {
                  component: {
                    id: 'PLANNER_SCREEN',
                    name: ROUTE_NAME.PLANNER_TAB,
                  },
                },
              ],
              options: {
                topBar: {
                  visible: true,
                  animate: true,
                  background: {color: presetBase.colors.white},
                },
                bottomTab: {
                  text: 'Planner',
                  selectedFontSize: 13,
                  selectedTextColor: presetBase.colors.orangeBase,
                  icon: require('../assets/icons/bottom-tabs-icons/planner.png'),
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
                  selectedFontSize: 13,
                  selectedTextColor: presetBase.colors.orangeBase,
                  icon: require('../assets/icons/bottom-tabs-icons/account-icon.png'),
                },
              },
            },
          },
        ],
        options: {
          bottomTabs: {
            backgroundColor: presetBase.colors.greyBG,
            animateTabSelection: true,
            tabsAttachMode: 'afterInitialTab',
          },
        },
      },
    },
  });
