import {TextStyle} from 'react-native/types';

export const COLORS = {
  primary: '#118ab2',
  black: '#212529',
  gray: '#ced4da',
  gray2: '#6c757d',
  white: '#fff',
};

export const FONTS: {[key: string]: TextStyle} = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.black,
    lineHeight: 24,
  },
  body1: {
    fontSize: 16,
    color: COLORS.black,
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 24,
  },
  paragraph: {
    fontSize: 12,
    color: COLORS.gray2,
    lineHeight: 20,
  },
};
