import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Button, Input} from '../components';
import {COLORS, FONTS} from '../constants';
import { RootScreenNavigationProps } from '../../type';

export default function LoginScreen({navigation}: RootScreenNavigationProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const onInputChanged = (id: string, text: string) => {
    if (id === 'username') {
      setUsername(text);
    } else if (id === 'password') {
      setPassword(text);
    }
  };

  const onPressForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Input
        id="username"
        placeholder="ชื่อผู้ใช้งาน"
        onInputChanged={onInputChanged}
      />
      <Input
        id="password"
        placeholder="รหัสผ่าน"
        onInputChanged={onInputChanged}
        secureTextEntry
        autoCapitalize="none"
      />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            value={rememberMe}
            onValueChange={() => setRememberMe(!rememberMe)}
            tintColors={{true: COLORS.primary, false: COLORS.gray}}
            tintColor={COLORS.gray}
            onCheckColor={COLORS.primary}
          />
          <Text style={{...FONTS.body2}}>บันทึกการเข้าสู่ระบบ</Text>
        </View>
        <Text onPress={onPressForgotPassword} style={{...FONTS.body2}}>
          ลืมรหัสผ่าน?
        </Text>
      </View>

      <Button title="เข้าสู่ระบบ" onPress={() => navigation.navigate('Otp')} style={{width: '100%'}} />
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <View style={styles.divider} />
        <Text style={{...FONTS.body2, color: COLORS.gray2}}>
          ไม่มีบัญชีผู้ใช้
        </Text>
        <View style={styles.divider} />
      </View>
      <Button
        title="เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้"
        onPress={() => {}}
        isSecondary
        style={{width: '100%', borderColor: COLORS.black}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
    marginTop: 100,
  },
  divider: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 1,
    backgroundColor: COLORS.gray,
    marginVertical: 20,
  },
});