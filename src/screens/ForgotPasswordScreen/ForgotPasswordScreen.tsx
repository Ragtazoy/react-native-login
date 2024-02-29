import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RootScreenNavigationProps} from '../../../type';
import {Button, HeaderBack, Input, TextTitle} from '../../components';

export default function ForgotPasswordScreen({
  navigation,
}: RootScreenNavigationProps) {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const onInputChanged = (id: string, text: string) => {
    if (id === 'emailOrPhone') {
      setEmailOrPhone(text);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderBack />
      <View style={styles.subContainer}>
        <TextTitle
          title="ลืมรหัสผ่าน?"
          subtitle={`กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ที่\nลงทะเบียน`}
        />
        <Input
          id="emailOrPhone"
          onInputChanged={onInputChanged}
          placeholder="อีเมล / เบอร์โทรศัพท์"
          autoCapitalize="none"
        />
        <Button onPress={() => navigation.navigate('ResetSuccess')} title="ส่ง" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    gap: 40,
  },
});
