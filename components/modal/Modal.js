import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../global/constant';
import Title from '../header/Title';
import CustomButton from '../buttons/CustomButton';
import copy from '../../copy.json';

export default function CustomModal({
  cancelText,
  children,
  isVisible,
  onConfirm,
  setVisible,
  styleProp,
  submitText,
  title,
  withCancel,
  withCross,
  ...others
}) {
  const handleClose = e => {
    e.preventDefault();
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        onBackdropPress={handleClose}
        style={[styles.container, styleProp]}
        isVisible={isVisible}
        onBackButtonPress={handleClose}
        {...others}>
        <View style={styles.modal}>
          {withCross && (
            <TouchableOpacity style={styles.xmark} onPress={handleClose}>
              <FontAwesomeIcon icon={faXmark} />
            </TouchableOpacity>
          )}
          {title && <Title title={title} />}
          {children}
          <View style={styles.containerButton}>
            {withCancel && (
              <CustomButton
                backgroundColor={'white'}
                borderColor={COLORS.red}
                color={COLORS.red}
                onPress={handleClose}
                title={cancelText}
              />
            )}
            <CustomButton
              backgroundColor={'white'}
              borderColor={COLORS.darkBlue}
              color={COLORS.blackBlue}
              onPress={onConfirm}
              title={submitText}
              styleProp={styles.submitButton}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
  cancelText: PropTypes.string,
  isVisible: PropTypes.bool,
  onConfirm: PropTypes.func,
  setVisible: PropTypes.func,
  submitText: PropTypes.string,
  styleProp: PropTypes.object,
  title: PropTypes.string,
  withCancel: PropTypes.bool,
  withCross: PropTypes.bool,
};

CustomModal.defaultProps = {
  isVisible: false,
  cancelText: copy.annuler,
  onConfirm: () => {},
  setVisible: () => {},
  submitText: copy.ok,
  styleProp: null,
  title: null,
  withCancel: true,
  withCross: true,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    backgroundColor: COLORS.lightBlue,
    // maxHeight: '70%', TODO : for now
    borderRadius: 6,
    padding: 8,
  },
  xmark: {
    alignItems: 'flex-end',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  submitButton: {
    marginLeft: 12,
  },
});
