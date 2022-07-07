import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';
import { COLORS } from '../global/constant';

export default function CustomPagination({ activeIndex, nbPoints }) {
  return (
    <Pagination
      activeDotIndex={activeIndex}
      containerStyle={styles.container}
      dotsLength={nbPoints}
      dotStyle={styles.dots}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
}

CustomPagination.propTypes = {
  activeIndex: PropTypes.number,
  nbPoints: PropTypes.number.isRequired,
};

CustomPagination.defaultProps = {
  activeIndex: 0,
};

const styles = StyleSheet.create({
  container: {
    margin: -10,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: COLORS.darkBlue,
  },
});
