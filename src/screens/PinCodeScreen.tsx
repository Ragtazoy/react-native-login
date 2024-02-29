import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import DeleteIcon from 'react-native-vector-icons/Feather';
import FingerPrintIcon from 'react-native-vector-icons/Ionicons';
import {RootScreenNavigationProps} from '../../type';
import {COLORS, FONTS} from '../constants';
import {Button} from '../components';

const TEXT_TITLE = [
  'ตั้งรหัส PIN CODE',
  'ยืนยันรหัส PIN CODE',
  'กรุณากรอกรหัส PIN',
];

const PIN_CODE_PATTERN = [
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
  {id: '7'},
  {id: '8'},
  {id: '9'},
  {id: 'touchId'},
  {id: '0'},
  {id: 'delete'},
];

export default function PinCodeScreen({navigation}: RootScreenNavigationProps) {
  const [step, setStep] = useState(0);
  const [pinCode, setPinCode] = useState(['', '', '', '', '', '']);
  const [confirmPinCode, setConfirmPinCode] = useState(['', '', '', '', '', '']);

  useEffect(() => {
    handleStep();
  }, [pinCode, confirmPinCode]);

  const onPressPinCode = (id: string) => {
    if (id === 'touchId') {
      // TODO: Touch ID
    }

    if (id === 'delete') {
      if (step === 0) {
        handleDeletePinState(pinCode, setPinCode);
      } else if (step === 1) {
        handleDeletePinState(confirmPinCode, setConfirmPinCode);
      }
    }

    if (id !== 'touchId' && id !== 'delete') {
      if (step === 0) {
        handleSetPinState(id, pinCode, setPinCode);
      } else if (step === 1) {
        handleSetPinState(id, confirmPinCode, setConfirmPinCode);
      }
    }
  };

  const handleDeletePinState = (
    pinState: string[],
    setPin: (pin: string[]) => void = () => {},
  ) => {
    for (let i = pinState.length - 1; i >= 0; i--) {
      if (pinState[i] !== '') {
        setPin(pinState.map((item, index) => (index === i ? '' : item)));
        break;
      } else {
        continue;
      }
    }
  };

  const handleSetPinState = (
    id: string,
    pinState: string[],
    setPin: (pin: string[]) => void = () => {},
  ) => {
    for (let i = 0; i < pinState.length; i++) {
      if (pinState[i] === '') {
        setPin(pinState.map((item, index) => (index === i ? id : item)));
        break;
      } else {
        continue;
      }
    }
  };

  const handleStep = () => {
    if (!pinCode.includes('') && step === 0) {
      setStep(1);
      setConfirmPinCode(['', '', '', '', '', '']);
    }

    if (!confirmPinCode.includes('') && step === 1) {
      navigation.navigate('TouchId');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.codeTitle}>{TEXT_TITLE[step]}</Text>
        <View style={styles.codeContainer}>
          {(step === 0 ? pinCode : step === 1 ? confirmPinCode : []).map(
            (pin, index) => {
              const style = pin != '' ? styles.code2 : styles.code1;
              return <View key={index} style={style} />;
            },
          )}
        </View>
      </View>

      <View style={styles.pinContainer}>
        {PIN_CODE_PATTERN.map(({id}) => (
          <TouchableHighlight
            key={id}
            onPress={() => onPressPinCode(id)}
            underlayColor={
              id === 'touchId' || id === 'delete' ? COLORS.gray : COLORS.primary
            }
            style={[
              styles.pin,
              id === 'touchId' || id === 'delete' ? {borderWidth: 0} : null,
            ]}>
            {id === 'touchId' ? (
              <FingerPrintIcon
                name="finger-print"
                size={40}
                color={COLORS.primary}
              />
            ) : id === 'delete' ? (
              <DeleteIcon name="delete" size={30} color={COLORS.gray2} />
            ) : (
              <Text style={styles.textPad}>{id}</Text>
            )}
          </TouchableHighlight>
        ))}
      </View>

      <TouchableOpacity>
        <Text style={styles.codeTitle}>ลืมรหัส PIN ?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 40,
  },
  titleContainer: {
    marginTop: 70,
    marginBottom: 20,
    alignItems: 'center',
    gap: 15,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  codeTitle: {
    ...FONTS.subtitle,
  },
  code1: {
    width: 16,
    height: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  code2: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
  },
  pinContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  pin: {
    width: 75,
    height: 75,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  textPad: {
    fontSize: 28,
  },
});
