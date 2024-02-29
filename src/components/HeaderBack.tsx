import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 50,
    marginHorizontal: 20,
    marginTop: 20,
  },
  touchableHighlight: {
    padding: 5,
    borderRadius: 50,
  },
});

interface HeaderBackProps {
  display?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function HeaderBack({display = true, style}: HeaderBackProps) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        style,
        styles.container,
        display ? {display: 'flex'} : {display: 'none'},
      ]}>
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.5}
        underlayColor={COLORS.black + '20'}
        style={styles.touchableHighlight}>
        <Icon name="arrowleft" size={30} color={COLORS.black} />
      </TouchableHighlight>
    </View>
  );
}
