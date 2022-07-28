import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { IMAGES } from '../../asset/img';
import copy from '../../copy.json';
import { VIEWS } from '../global/constant';
import Item from './Item';

export default function MainPage({ navigation }) {
  const navigate = navigation.navigate;

  return (
    <ScrollView>
      <View>
        <Image style={styles.banner} source={IMAGES.banner} />
        <View style={styles.buttons}>
          <Item title={copy.training} onPress={() => navigate(VIEWS.session)} />
          <Item title={copy.results} />
          <Item title={copy.profile} />
          <Item title={copy.about} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
  },
  buttons: {
    marginTop: 16,
  },
});
