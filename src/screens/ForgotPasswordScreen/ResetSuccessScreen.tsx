import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootScreenNavigationProps} from '../../../type';
import {COLORS, FONTS} from '../../constants';
import {Button} from '../../components';

export default function ResetSuccessScreen({
  navigation,
}: RootScreenNavigationProps) {
  return (
    <View
      onTouchStart={() => navigation.navigate('Login')}
      style={styles.container}>
      <View style={styles.subContainer}>
        <Icon
          name="checkmark-circle-outline"
          size={170}
          color={COLORS.primary}
          style={styles.icon}
        />

        <View style={styles.textGroup}>
          <Text style={styles.title}>สําเร็จ</Text>
          <Text style={styles.subtitle}>รีเซตรหัสผ่านของคุณสําเร็จแล้ว</Text>
        </View>

        <Button
          title="ตกลง"
          onPress={() => navigation.navigate('Login')}
          style={{width: '100%'}}
        />
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  icon: {
    marginVertical: 60,
  },
  textGroup: {
    alignItems: 'center',
    gap: 20,
    marginBottom: 50,
  },
  title: {
    ...FONTS.title,
  },
  subtitle: {
    ...FONTS.subtitle,
  },
});
