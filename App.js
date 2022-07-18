/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
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
import MainPage from './components/mainPage/MainPage';
import Loading from './components/loading';
import { checkToken } from './services';

const Stack = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    checkToken().then(({ success }) => setToken(success));
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={styles.container}>
        <Navbar />
        {token === null ? (
          <Loading />
        ) : (
          <Stack.Navigator
            initialRouteName={VIEWS.home}
            screenOptions={{
              contentStyle: { backgroundColor: COLORS.lightBlue },
              headerShown: false,
            }}>
            {token === true ? (
              <Stack.Screen name={VIEWS.mainPage} component={MainPage} />
            ) : (
              <>
                <Stack.Screen name={VIEWS.home} component={Home} />
                <Stack.Screen
                  name={VIEWS.connexion}
                  component={Connexion}
                  initialParams={{ setToken }}
                />
                <Stack.Screen
                  name={VIEWS.inscription}
                  component={Inscription}
                />
              </>
            )}
          </Stack.Navigator>
        )}
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
