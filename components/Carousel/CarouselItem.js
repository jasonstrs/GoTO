import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native';
import { IMAGES } from '../../asset/img';

const dimensions = Dimensions.get('window');

export default function CarouselItem({ item }) {
  return (
    <View style={styles.renderItem}>
      <Image style={styles.logo} source={IMAGES[item.imagePath]} />
      <View style={styles.body}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
}

CarouselItem.propTypes = {
  item: PropTypes.objectOf({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  renderItem: {
    backgroundColor: 'floralwhite',
    borderRadius: 15,
    marginTop: 25,
    marginRight: 5,
    marginLeft: 5,
    height: dimensions.height - 140,
  },
  title: {
    fontSize: 30,
    marginBottom: 8,
  },
  logo: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
  },
  body: {
    padding: 16,
  },
  text: {
    textAlign: 'justify',
  },
});
