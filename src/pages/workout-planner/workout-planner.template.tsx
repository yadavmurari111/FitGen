import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LabelComponent from '../../components/typography/label/label.component';
import {ETypographyVariant} from '../../components/typography/label/model/label.interface';
import {presetBase} from '../../utils/color';

const WorkoutPlannerTemplate = () => {
  return (
    <View
      style={{flex: 1, padding: 12, backgroundColor: presetBase.colors.white}}>
      <LabelComponent variant={ETypographyVariant.HEADER_H1}>
        My workout
      </LabelComponent>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 0.1,
            borderRadius: 12,
            backgroundColor: presetBase.colors.redBase,
            paddingVertical: 5,
            paddingHorizontal: 20,
          }}
          onPress={() => {}}>
          <LabelComponent
            color={presetBase.colors.white}
            variant={ETypographyVariant.MEDIUM_SEMIBOLD}>
            Tap to create workout
          </LabelComponent>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default WorkoutPlannerTemplate;
