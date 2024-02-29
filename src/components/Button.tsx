import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS} from '../constants';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 5,
  },
  solidBtn: {
    backgroundColor: COLORS.primary,
  },
  outlineBtn: {
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  btnText: {
    ...FONTS.body3,
    textAlign: 'center',
  },
  solidBtnText: {
    color: COLORS.white,
  },
  outlineBtnText: {
    color: COLORS.primary,
  },
});

interface CustomButtonProps {
  title: string;
  isSecondary?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function Button(props: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        props.isSecondary ? styles.outlineBtn : styles.solidBtn,
        props.style,
      ]}>
      <Text
        style={[
          styles.btnText,
          props.isSecondary ? styles.outlineBtnText : styles.solidBtnText,
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
