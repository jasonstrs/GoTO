import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import ButtonLink from '../buttons/ButtonLink';
import copy from '../../copy.json';
import { navigate } from '../global/rootNavigation';
import { COLORS, VIEWS } from '../global/constant';
import { useSelector } from 'react-redux';
import { IMAGES } from '../../asset/img';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const token = useSelector(state => state.user.token);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image style={styles.logo} source={IMAGES.logo} />
      </TouchableOpacity>
      {token === false && (
        <View style={styles.rightContainer}>
          <ButtonLink
            func={() => navigate(VIEWS.connexion)}
            style={styles.button}
            title={copy.connexion}
          />
          <ButtonLink
            func={() => navigate(VIEWS.inscription)}
            style={styles.button}
            title={copy.inscription}
          />
        </View>
      )}
      {token === true && (
        <TouchableOpacity style={styles.profilIcon}>
          <FontAwesomeIcon
            icon={faCircleUser}
            size={24}
            color={COLORS.blackBlue}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginRight: 8,
    fontWeight: '600',
    color: COLORS.blackBlue,
  },
  rightContainer: {
    flexDirection: 'row',
  },
  logoContainer: {
    marginLeft: 8,
  },
  logo: {
    height: 32,
    width: 100,
  },
  profilIcon: {
    marginRight: 8,
  },
});
