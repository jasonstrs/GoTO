import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import ButtonLink from '../buttons/ButtonLink';
import copy from '../../copy.json';
import { navigate } from '../global/rootNavigation';
import { COLORS, VIEWS } from '../global/constant';
import { useSelector } from 'react-redux';
import CustomModal from '../modal/Modal';
import { IMAGES } from '../../asset/img';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import ProfilItem from './ProfilItem';
import { postLogOut } from '../../services';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/features/user/userSlice';

export default function Navbar() {
  const token = useSelector(state => state.user.token);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const logoClic = () => {
    if (token) {
      navigate(VIEWS.mainPage);
    } else {
      navigate(VIEWS.home);
    }
  };

  const handleLogOut = () => {
    postLogOut().then(({ success }) => {
      if (success) {
        dispatch(setToken({ token: false }));
        navigate(VIEWS.home);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoContainer} onPress={logoClic}>
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
        <View style={styles.logoModalContainer}>
          <TouchableOpacity
            style={styles.profilIcon}
            onPress={() => setShowModal(true)}>
            <FontAwesomeIcon
              icon={faCircleUser}
              size={24}
              color={COLORS.blackBlue}
            />
          </TouchableOpacity>
          <CustomModal
            isVisible={showModal}
            setVisible={setShowModal}
            animationIn={'slideInRight'}
            animationOut={'slideOutRight'}
            styleProp={styles.modal}
            withFooter={false}
            withCross={false}>
            <View style={styles.containerModal}>
              <Image style={styles.logoModal} source={IMAGES.logo} />
              <ProfilItem
                text={copy.deconnexion}
                onPress={handleLogOut}
                setVisibleModal={setShowModal}
              />
              <ProfilItem
                text={copy.deconnexion}
                onPress={handleLogOut}
                setVisibleModal={setShowModal}
              />
              <ProfilItem
                text={copy.deconnexion}
                onPress={handleLogOut}
                setVisibleModal={setShowModal}
              />
              <ProfilItem
                text={copy.deconnexion}
                onPress={handleLogOut}
                setVisibleModal={setShowModal}
              />
            </View>
          </CustomModal>
        </View>
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
  logoModal: {
    height: 40,
    width: 130,
    marginBottom: 12,
  },
  containerModal: {
    alignItems: 'center',
    marginBottom: 12,
    borderBottomWidth: 2,
    borderColor: COLORS.blackBlue,
  },
  profilIcon: {
    marginRight: 8,
    marginTop: 6,
  },
  modal: {
    marginRight: 0,
    marginBottom: 0,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
