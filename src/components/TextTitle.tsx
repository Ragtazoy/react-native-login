import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { FONTS } from '../constants';

const styles = StyleSheet.create({
  title: {...FONTS.title},
  subtitle: {...FONTS.subtitle},
});

interface TextTitleProps {
  title: string;
  subtitle: string;
}


export default function TextTitle ({title, subtitle}: TextTitleProps) {
  return (
    <View style={{paddingVertical: 10, gap: 10}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
