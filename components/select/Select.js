import React from 'react';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../global/constant';

export default function Select({ onChange, style, values }) {
  return (
    <View style={[styles.container, style]}>
      <RNPickerSelect
        placeholder={{ label: 'Select you favourite language', value: null }}
        onValueChange={onChange}
        items={values}
        style={styles.input}
      />
    </View>
  );
}

Select.propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.object,
  values: PropTypes.arrayOf(PropTypes.object),
};

Select.defaultProps = {
  onChange: () => {},
  style: {},
  values: [],
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 8,
    borderRadius: 10,
    backgroundColor: COLORS.blue,
    marginBottom: 16,
  },
  input: {
    fontSize: 36,
  },
});
