import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Dimensions, StyleSheet} from 'react-native';

const dimensions = Dimensions.get('window');

export default function CarouselItem({item}) {
  return (
    <View style={styles.renderItem}>
      <Text style={styles.size}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );
}

CarouselItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  renderItem: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    marginTop: 25,
    marginRight: 5,
    marginLeft: 5,
    height: dimensions.height - 140,
  },
  size: {
    fontSize: 30,
  },
});
