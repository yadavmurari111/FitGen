import React, {FunctionComponent, ReactElement, useEffect} from 'react';
import {Text, View} from 'react-native';
import {LOGGEDIN_USER} from './utils/utils';
import {goToHome, setWelcomeRoute} from './navigation/app-root';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Routes: FunctionComponent = (): ReactElement => {
  const setRoute = async () => {
    await AsyncStorage.getItem(LOGGEDIN_USER).then(result => {
      const LoggedInResult = result ? JSON.parse(result) : undefined;

      if (LoggedInResult !== undefined) {
        goToHome();
      } else {
        setWelcomeRoute();
      }
    });
  };

  useEffect(() => {
    setRoute().then();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 40,
        }}>
        Loading...
      </Text>
    </View>
  );
};
