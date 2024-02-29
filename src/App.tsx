import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import OtpScreen from './screens/OtpScreen/OtpScreen';
import ConfirmOtpScreen from './screens/OtpScreen/ConfirmOtpScreen';
import ForgetPasswordScreen from './screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetSuccessScreen from './screens/ForgotPasswordScreen/ResetSuccessScreen';
import PinCodeScreen from './screens/PinCodeScreen';
import TouchIdScreen from './screens/TouchIdScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="ConfirmOtp" component={ConfirmOtpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="ResetSuccess" component={ResetSuccessScreen} />
        <Stack.Screen name="PinCode" component={PinCodeScreen} />
        <Stack.Screen name="TouchId" component={TouchIdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
