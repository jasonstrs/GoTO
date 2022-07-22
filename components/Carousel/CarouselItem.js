import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native';
import { IMAGES } from '../../asset/img';
import CustomButton from '../buttons/CustomButton';
import copy from '../../copy.json';
import { VIEWS } from '../global/constant';
import { navigate } from '../global/rootNavigation';

const dimensions = Dimensions.get('window');

export default function CarouselItem({ item }) {
  const handleClic = () => navigate(VIEWS[item.navigation.view]);

  return (
    <View style={styles.renderItem}>
      <Image style={styles.logo} source={IMAGES[item.imagePath]} />
      <View style={styles.body}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        {item.navigation && (
          <CustomButton
            styleProp={styles.button}
            title={copy.inscription}
            onPress={handleClic}
          />
        )}
      </View>
    </View>
  );
}

CarouselItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
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
    width: 'auto',
    height: 155,
  },
  body: {
    padding: 16,
  },
  text: {
    textAlign: 'justify',
  },
  button: {
    marginTop: 20,
  },
});
