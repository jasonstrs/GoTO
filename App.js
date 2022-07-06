/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Navbar from './components/Navbar/Navbar';
import VueInitiale from './components/VueInitiale/VueInitiale';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.view}>
        <Navbar />
        <VueInitiale />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82affc',
  },
  view: {
    backgroundColor: '#dee9fc',
  },
});

export default App;
