import React, {Ref, RefAttributes, forwardRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    borderBottomColor: COLORS.gray2,
    borderBottomWidth: 0.5,
    marginVertical: 5,
    flexDirection: 'row',
  },
  input: {
    color: COLORS.black,
    flex: 1,
    fontFamily: 'regular',
    paddingTop: 0,
    paddingBottom: 5,
  },
  errorContainer: {
    marginVertical: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

interface InputProps extends TextInputProps {
  id: string;
  placeholder: string;
  onInputChanged: (id: string, text: string) => void;
  errorText?: string[];
}

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const onChangeText = (text: string) => {
    props.onInputChanged(props.id, text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          ref={ref}
          style={styles.input}
          onChangeText={onChangeText}
          placeholder={props.placeholder}
          placeholderTextColor={COLORS.black}
        />
      </View>
      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText[0]}</Text>
        </View>
      )}
    </View>
  );
});

export default Input;
