import React from 'react';
import PropTypes from 'prop-types';
import TouchableContainer from './TouchableContainer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

export default function TouchableContainerWithIcons({
  children,
  icons,
  id,
  onPress,
}) {
  return (
    <TouchableContainer onPress={onPress}>
      <View style={styles.icons}>
        {icons.map(icon => (
          <TouchableOpacity
            style={styles.logo}
            onPress={() => icon.onPress(id)}>
            <FontAwesomeIcon icon={icon.source} />
          </TouchableOpacity>
        ))}
      </View>
      {children}
    </TouchableContainer>
  );
}

TouchableContainerWithIcons.propTypes = {
  children: PropTypes.node.isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        onPress: PropTypes.func,
        source: PropTypes.object,
      }),
    ),
  ),
  id: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

TouchableContainerWithIcons.defaultProps = {
  icons: [],
  onPress: () => {},
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    zIndex: 2,
  },
  logo: {
    marginLeft: 8,
  },
});
