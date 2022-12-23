import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './welcome-screen.styles';
import {IWelcomeScreenTemplate} from './welcome-screen.interface';

const WelcomeScreenTemplate: FunctionComponent<IWelcomeScreenTemplate> = ({
  signIn,
}: IWelcomeScreenTemplate) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.buttonText} onPress={() => signIn()}>
          <Text>login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default WelcomeScreenTemplate;
