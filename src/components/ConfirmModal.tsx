import React from 'react';
import {
  Modal,
  ModalProps,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../constants';

interface ConfirmModalProps extends ModalProps {
  icon?: string;
  title: string;
  subtitle: string;
  confirmText?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onConfirm?: () => void;
}

export default function ConfirmModal({
  confirmText = 'ยืนยัน',
  ...props
}: ConfirmModalProps) {
  return (
    <Modal
      visible={props.isOpen}
      animationType="fade"
      transparent
      onDismiss={() => props.setIsOpen(false)}
      {...props}>
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            {props.icon && (
              <Icon
                name={props.icon.toString()}
                size={40}
                color={COLORS.danger}
              />
            )}
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
          </View>

          <View style={styles.btnGroup}>
            <TouchableHighlight
              onPress={() => {
                props.onConfirm, props.setIsOpen(false);
              }}
              underlayColor={COLORS.black + 20}
              style={styles.touchable}>
              <Text style={styles.btnText}>{confirmText}</Text>
            </TouchableHighlight>
            <View style={styles.divider} />
            <TouchableHighlight
              onPress={() => props.setIsOpen(false)}
              underlayColor={COLORS.black + 20}
              style={[
                styles.touchable,
                {borderBottomLeftRadius: 15, borderBottomRightRadius: 15},
              ]}>
              <Text style={styles.btnText}>ยกเลิก</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  container: {
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 60,
    gap: 5,
  },
  title: {
    ...FONTS.subtitle,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    ...FONTS.paragraph,
    lineHeight: 18,
    color: COLORS.black,
    textAlign: 'center',
  },
  btnGroup: {
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 0.3,
    backgroundColor: COLORS.gray2,
  },
  touchable: {
    width: '100%',
    padding: 10,
  },
  btnText: {
    ...FONTS.subtitle,
    textAlign: 'center',
    color: COLORS.info,
  },
});
