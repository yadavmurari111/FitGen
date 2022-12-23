import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LabelComponent from '../../components/typography/label/label.component';
import {ETypographyVariant} from '../../components/typography/label/model/label.interface';
import {presetBase} from '../../utils/color';
import {FlashList} from '@shopify/flash-list';
import {Exercise} from './user-home.service';

const UserHomeTemplate = () => {
  // @ts-ignore
  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            padding: 20,
            borderRadius: 12,
            marginVertical: 1,
            alignItems: 'center',
            backgroundColor: presetBase.colors.orangeBase,
          }}>
          <LabelComponent variant={ETypographyVariant.LARGE_SEMIBOLD}>
            {item.title}
          </LabelComponent>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={{flex: 1, padding: 12, backgroundColor: presetBase.colors.white}}>
      <LabelComponent variant={ETypographyVariant.HEADER_H1}>
        Exercises
      </LabelComponent>
      <View
        style={{
          flex: 1,
          padding: 3,
          overflow: 'hidden',
          borderWidth: 0,
          borderRadius: 12,
        }}>
        <FlashList
          data={Exercise}
          estimatedItemSize={20}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default UserHomeTemplate;
