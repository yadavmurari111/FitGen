import React from 'react';
import {Text, View} from 'react-native';
import LabelComponent from '../../components/typography/label/label.component';
import {ETypographyVariant} from '../../components/typography/label/model/label.interface';

const UserHomeTemplate = () => {
  return (
    <View>
      <View>
        <Text>home</Text>
      </View>
      <LabelComponent variant={ETypographyVariant.SMALL_SEMIBOLD_POPPINS}>
        hii
      </LabelComponent>
    </View>
  );
};
export default UserHomeTemplate;
