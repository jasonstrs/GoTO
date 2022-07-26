import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export default function Item({ title }) {
  return <Text>{title}</Text>;
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Item.defaultProps = {
  className: '',
};
