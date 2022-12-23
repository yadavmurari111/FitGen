import React, {FunctionComponent, useEffect} from 'react';
import WelcomeScreenTemplate from './welcome-screen.template';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {WebClientId} from './welcome-screen.services';
import {IWelcomeScreenInterface} from './welcome-screen.interface';
import auth from '@react-native-firebase/auth';
import {goToHome} from '../../navigation/app-root';

const WelcomeScreenComponent: FunctionComponent<
  IWelcomeScreenInterface
> = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WebClientId,
    });
  }, []);

  const onGoogleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true}); // Check if your device supports Google Play
    const {idToken} = await GoogleSignin.signIn(); // Get the users ID token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken); // Create a Google credential with the token
    return auth().signInWithCredential(googleCredential); // Sign-in the user with the credential
  };

  const signIn = () => {
    onGoogleButtonPress().then(result => {
      console.log(result);
      goToHome();
    });
  };

  return <WelcomeScreenTemplate signIn={signIn} />;
};
export default WelcomeScreenComponent;
