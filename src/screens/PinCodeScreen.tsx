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
import {ConfirmModal} from '../components';

const TEXT_TITLE = [
  'ตั้งรหัส PIN CODE',
  'ยืนยันรหัส PIN CODE',
  'กรุณากรอกรหัส PIN',
];

const PIN_CODE_DEFAULT = ['', '', '', '', '', ''];

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

export default function PinCodeScreen({
  navigation,
  route,
}: RootScreenNavigationProps) {
  const hasPin = route.params?.hasPin;

  const [step, setStep] = useState(0);
  const [pinCode, setPinCode] = useState(PIN_CODE_DEFAULT);
  const [newPinCode, setNewPinCode] = useState(PIN_CODE_DEFAULT);
  const [confirmPinCode, setConfirmPinCode] = useState(PIN_CODE_DEFAULT);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (hasPin) {
      setOpenModal(true);
      setNewPinCode(PIN_CODE_DEFAULT);
      setConfirmPinCode(PIN_CODE_DEFAULT);
      setStep(2);
    }
  }, [hasPin]);

  useEffect(() => {
    handleStep();
  }, [newPinCode, confirmPinCode]);

  const onPressPinCode = (id: string) => {
    if (id === 'touchId') {
      // TODO: Touch ID
    }

    if (id === 'delete') {
      if (step === 0) {
        handleDeletePinState(newPinCode, setNewPinCode);
      } else if (step === 1) {
        handleDeletePinState(confirmPinCode, setConfirmPinCode);
      } else if (step === 2) {
        handleDeletePinState(pinCode, setPinCode);
      }
    }

    if (id !== 'touchId' && id !== 'delete') {
      if (step === 0) {
        handleSetPinState(id, newPinCode, setNewPinCode);
      } else if (step === 1) {
        handleSetPinState(id, confirmPinCode, setConfirmPinCode);
      } else if (step === 2) {
        handleSetPinState(id, pinCode, setPinCode);
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
    if (!newPinCode.includes('') && step === 0) {
      setStep(1);
      setConfirmPinCode(PIN_CODE_DEFAULT);
    }

    if (!confirmPinCode.includes('') && step === 1) {
      navigation.navigate('TouchId');
    }

    if (!pinCode.includes('') && step === 2) {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.codeTitle}>{TEXT_TITLE[step]}</Text>
        <View style={styles.codeContainer}>
          {(step === 0
            ? newPinCode
            : step === 1
            ? confirmPinCode
            : pinCode
          ).map((pin, index) => {
            const style = pin != '' ? styles.code2 : styles.code1;
            return <View key={index} style={style} />;
          })}
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
              // Touch ID pin
              <FingerPrintIcon
                name="finger-print"
                size={40}
                color={COLORS.primary}
                style={step !== 2 ? {display: 'none'} : null}
              />
            ) : id === 'delete' ? (
              // Delete pin
              <DeleteIcon name="delete" size={30} color={COLORS.gray2} />
            ) : (
              // Number pin
              <Text style={styles.textPad}>{id}</Text>
            )}
          </TouchableHighlight>
        ))}
      </View>

      <TouchableOpacity>
        <Text style={styles.codeTitle}>ลืมรหัส PIN ?</Text>
      </TouchableOpacity>

      <ConfirmModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        icon="finger-print"
        title={`Touch ID for\n"CGS Application"`}
        subtitle={`เข้าใช้งานด้วย Touch ID หรือ\nยกเลิกเพื่อกลับไปใช้รหัส PIN`}
        confirmText="Enter Password"
      />
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
