import ROUTE_NAME from './navigation-constants';

const setHomeScreen = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: ROUTE_NAME.APP,
          },
        },
      ],
    },
  },
};
const setBottomTabs = {
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
                  name: 'HomeScreen',
                },
              },
            ],
            options: {
              bottomTab: {
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
                  name: 'ProfileScreen',
                },
              },
            ],
            options: {
              bottomTab: {

               // icon: require('./profile.png'),
              },
            },
          },
        },
      ],
    },
  },
};
export default setHomeScreen;
