import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS, FONTS} from '../constants';
import {RootScreenNavigationProps} from '../../type';
import {Button, HeaderBack, TextTitle} from '../components';

export default function WelcomeScreen({navigation}: RootScreenNavigationProps) {
  const [showHeader, setShowHeader] = useState(false);

  const onPressEnglish = () => {};

  const onPressThai = () => {
    setShowHeader(true);
  };

  const onPressReject = () => {
    setShowHeader(false);
  };

  const onPressAccept = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <HeaderBack display={showHeader} />
      <View style={styles.welcomeContainer}>
        <TextTitle title="ยินดีต้อนรับ" subtitle="กรุณาเลือกภาษา" />
        <View style={styles.welcomeButtonGroup}>
          <Button onPress={onPressEnglish} title={'English'} />
          <Button onPress={onPressThai} title={'ไทย'} />
        </View>
      </View>
      {showHeader && (
        <View style={styles.conditionContainer}>
          <View style={styles.conditionTitle}>
            <Icon name="profile" size={30} color={COLORS.black} />
            <Text style={styles.title}>เงื่อนไขการใช้บริการ</Text>
          </View>
          <View style={styles.divider} />
          <View style={{flex: 1}}></View>
          <View style={styles.conditionButtonGroup}>
            <Button
              onPress={onPressReject}
              title={'ปฏิเสธ'}
              isSecondary
              style={{flex: 1}}
            />
            <Button
              onPress={onPressAccept}
              title={'ยอมรับ'}
              style={{flex: 1}}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    padding: 20,
    gap: 60,
  },
  welcomeButtonGroup: {
    width: '100%',
    flexDirection: 'column',
    gap: 20,
  },
  conditionContainer: {
    position: 'absolute',
    padding: 20,
    bottom: 0,
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.52,
    shadowRadius: 15,
    elevation: 15,
  },
  conditionTitle: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  title: {...FONTS.title},
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.gray,
    marginVertical: 20,
  },
  conditionButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});
