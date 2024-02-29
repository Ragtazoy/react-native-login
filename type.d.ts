import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Login: undefined;
  Otp: undefined;
  ConfirmOtp: undefined;
  ForgotPassword: undefined;
  ResetSuccess: undefined;
  PinCode: {hasPin: boolean};
  TouchId: undefined;
};

export type RootScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Splash',
  'Welcome',
  'Login',
  'Otp',
  'ConfirmOtp',
  'ForgotPassword',
  'ResetSuccess',
  'PinCode',
  'TouchId'
>;
