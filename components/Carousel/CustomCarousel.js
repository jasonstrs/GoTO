import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselItem from '../Carousel/CarouselItem';
import CustomPagination from '../Carousel/CustomPagination';

export default function CustomCarousel({items, withPagination}) {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        data={items}
        itemWidth={220}
        layout={'default'}
        onSnapToItem={setIndex}
        renderItem={({item}) => <CarouselItem item={item} />}
        sliderWidth={300}
      />
      {withPagination && (
        <CustomPagination activeIndex={index} nbPoints={items.length} />
      )}
    </View>
  );
}

CustomCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  withPagination: PropTypes.bool,
};

CustomCarousel.defaultProps = {
  withPagination: true,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
