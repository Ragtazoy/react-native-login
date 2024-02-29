import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FingerPrintIcon from 'react-native-vector-icons/Ionicons';
import {RootScreenNavigationProps} from '../../type';
import {COLORS, FONTS} from '../constants';
import {Button, TextTitle} from '../components';

export default function TouchIdScreen({navigation}: RootScreenNavigationProps) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{alignSelf: 'flex-start'}}>
          <TextTitle
            title={'Touch ID'}
            subtitle={`ตั้งค่าล็อคอินด้วยลายนิ้วมือ\nเพื่อการเข้าถึงที่รวดเร็ว`}
          />
        </View>

        <TouchableOpacity style={styles.fingerPrint}>
          <FingerPrintIcon
            name="finger-print"
            size={70}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <View style={styles.btnGroup}>
          <Button
            title="ตั้งค่าลายนิ้วมือ"
            onPress={() => {}}
            style={{width: '100%'}}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('PinCode', {hasPin: true})}
            style={{padding: 10}}>
            <Text style={[FONTS.body3, {color: COLORS.primary}]}>ข้าม</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
    gap: 100,
  },
  fingerPrint: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 70,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  btnGroup: {
    marginTop: 70,
    width: '100%',
    alignItems: 'center',
    gap: 30,
  },
});
