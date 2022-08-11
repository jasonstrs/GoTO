import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { IMAGES } from '../../asset/img';
import { COLORS } from '../global/constant';

export default function Timer({ time }) {
  const fontSize = time > 99 ? 24 : 30;
  const styles = StyleSheet.create({
    text: {
      marginTop: 20,
      fontSize: fontSize,
      fontWeight: '700',
      color: COLORS.lightGreen,
      marginLeft: 8,
    },
    image: {
      width: 120,
      height: 140,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View>
      <ImageBackground style={styles.image} source={IMAGES.timer}>
        <Text style={styles.text}>{`${time}'`}</Text>
      </ImageBackground>
    </View>
  );
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
};

Timer.defaultProps = {};
