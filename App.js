/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from './components/global/constant';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from './components/connexion';
import { navigationRef } from './components/global/rootNavigation';
import { VIEWS } from './components/global/constant';
import Inscription from './components/inscription';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={styles.container}>
        <Navbar />
        <Stack.Navigator
          initialRouteName={VIEWS.home}
          screenOptions={{
            contentStyle: { backgroundColor: COLORS.lightBlue },
            headerShown: false,
          }}>
          <Stack.Screen name={VIEWS.home} component={Home} />
          <Stack.Screen name={VIEWS.connexion} component={Connexion} />
          <Stack.Screen name={VIEWS.inscription} component={Inscription} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },
});

export default App;
