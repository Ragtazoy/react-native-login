import React from 'react';
import {Pressable, View} from 'react-native';
import {RootScreenNavigationProps} from '../../type';
import {COLORS} from '../constants';

export default function SplashScreen({navigation}: RootScreenNavigationProps) {
  return (
    <Pressable onPress={() => navigation.navigate('Welcome')} style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: COLORS.primary}} />
    </Pressable>
  );
}
