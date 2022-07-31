/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
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
import Loading from './components/loading';
import { checkToken } from './services';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from './redux/features/user/userSlice';
import MainPage from './components/mainPage/MainPage';
import Session from './components/session';

const Stack = createNativeStackNavigator();

const App = () => {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    checkToken().then(({ success }) => {
      dispatch(setToken({ token: success }));
    });
  }, [dispatch]);

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
              <>
                <Stack.Screen name={VIEWS.mainPage} component={MainPage} />
                <Stack.Screen name={VIEWS.session} component={Session} />
              </>
            ) : (
              <>
                <Stack.Screen name={VIEWS.home} component={Home} />
                <Stack.Screen name={VIEWS.connexion} component={Connexion} />
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
