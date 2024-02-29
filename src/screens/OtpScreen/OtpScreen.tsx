import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, HeaderBack} from '../../components';
import {COLORS, FONTS} from '../../constants';
import {RootScreenNavigationProps} from '../../../type';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      gap: 50,
      padding: 20,
  },
  subContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    ...FONTS.title,
  },
  title2: {
    ...FONTS.title,
    fontWeight: 'normal',
    color: COLORS.primary,
  },
  desc: {
    ...FONTS.paragraph,
    marginTop: 10,
  },
});

export default function OtpScreen({navigation}: RootScreenNavigationProps) {
  return (
    <View style={styles.container}>
      <HeaderBack style={{position: 'absolute', top: 0}} />
      <Icon name="phonelink-lock" size={80} color={COLORS.primary} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์</Text>
        <Text style={styles.title2}>082-XXX-8998</Text>
      </View>
      <View style={styles.subContainer}>
        <Button
          title="ขอรหัส OTP"
          onPress={() => navigation.navigate('ConfirmOtp')}
          style={{width: '100%'}}
        />
        <Text style={styles.desc}>
          กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX
        </Text>
      </View>
    </View>
  );
}
