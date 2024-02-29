import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { RootScreenNavigationProps } from '../../../type';
import {COLORS, FONTS} from '../../constants';
import {HeaderBack, Input, TextTitle} from '../../components';

export default function ConfirmOtpScreen({navigation}: RootScreenNavigationProps) {
  const inputRef = useRef<TextInput>(null);
  const [otpPassword, setOtpPassword] = useState('');

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onInputChanged = (id: string, text: string) => {
    text = text.replace(/[^0-9]/g, '');
    if (id === 'otp' && text.length) {
      setOtpPassword(text);
      if (text.length === 6) {
        navigation.navigate('PinCode');
      }
    }
  };

  return (
    <View style={styles.container}>
      <HeaderBack />
      <View style={styles.subContainer}>
        <TextTitle
          title="ยืนยันตัวตน"
          subtitle={`กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ\n082-XXX-8998`}
        />
        <KeyboardAvoidingView
          keyboardVerticalOffset={50}
          behavior="padding"
          style={styles.avoidingViewContainer}>
          <View style={{width: 0, height: 0}}>
            <Input
              ref={inputRef}
              id="otp"
              onInputChanged={onInputChanged}
              placeholder="รหัส OTP"
              value={otpPassword}
              maxLength={6}
              focusable={true}
              returnKeyType="done"
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.containerInput}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <View
                  key={index}
                  onTouchStart={() => inputRef.current?.focus()}
                  style={styles.cellView}>
                  <Text style={styles.cellText}>
                    {otpPassword?.length > 0 ? otpPassword[index] : ''}
                  </Text>
                </View>
              ))}
          </View>

          <View style={styles.resendOtp}>
            <Text style={styles.resendOtpText}>หากคุณไม่ได้รับรหัส</Text>
            <Text style={[styles.resendOtpText, {color: COLORS.primary}]}>
              ส่งรหัสใหม่ (57)
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  avoidingViewContainer: {
    flex: 1,
  },
  containerInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    marginTop: 50,
  },
  cellView: {
    width: 30,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  cellText: {
    textAlign: 'center',
    fontSize: 24,
    color: COLORS.black,
  },
  resendOtp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40,
    gap: 10,
  },
  resendOtpText: {
    ...FONTS.body1,
  },
});
