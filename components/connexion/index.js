import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CustomTextInput from '../input/CustomTextInput';
import copy from '../../copy.json';
import ButtonLink from '../buttons/ButtonLink';
import { COLORS, SIZES, VIEWS } from '../global/constant';
import CustomButton from '../buttons/CustomButton';
import Title from '../header/Title';
import PasswordInput from '../input/PasswordInput';
import { isEmpty } from 'lodash';
import Banner from '../banner/Banner';
import { postConnexion } from '../../services';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/features/user/userSlice';
import CustomModal from '../modal/Modal';
import ForgottenPassword from './ForgottenPassword';
import PasswordSent from './PasswordSent';

export default function Connexion({ navigation, route }) {
  const [showBanner, setShowBanner] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSucceed, setIsSucceed] = useState(false);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    control: controlModal,
    handleSubmit: handleSubmitModal,
    formState: { errors: errorsModal },
  } = useForm({
    defaultValues: { email: '' },
  });

  useEffect(() => {
    if (!isEmpty(route.params.user)) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, [route.params.user]);

  const onSubmit = data => {
    postConnexion(data).then(({ erreur, success }) => {
      setShowBanner(false);
      if (erreur || !success) {
        setError(!success ? copy['connexion.misMatch'] : erreur);
      } else {
        setError(null);
        dispatch(setToken({ token: true }));
        navigation.navigate(VIEWS.mainPage);
      }
    });
  };

  const onPressModal = data => {
    console.log('data Modal : ' + data);

    // TODO : faire la requête
    setIsSucceed(true);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {showBanner && (
          <Banner
            backgroundColor={COLORS.green}
            color="white"
            text={copy['inscription.finie']}
          />
        )}
        {error && (
          <Banner backgroundColor={COLORS.red} color="white" text={error} />
        )}
        <Title
          color={COLORS.blackBlue}
          size={SIZES.extraBig}
          title={copy.identificate}
        />

        <Controller
          control={control}
          rules={{
            required: copy.requiredField,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: copy.incorrectEmailAddress,
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              errors={errors.email}
              label={copy.writeEmail}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{ required: copy.requiredField }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PasswordInput
              errors={errors.password}
              label={copy.writePassword}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="password"
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            backgroundColor={COLORS.blue}
            borderColor={COLORS.darkBlue}
            color={COLORS.blackBlue}
            onPress={handleSubmit(onSubmit)}
            title={copy.connexion}
          />
        </View>

        <Text style={styles.text}>
          {`${copy.noAccount} `}
          <ButtonLink
            func={() => navigation.navigate('Inscription')}
            style={styles.link}
            title={copy.subscribe}
          />
        </Text>
        <ButtonLink
          func={() => setShowModal(true)}
          style={styles.link}
          title={`${copy.passwordForgotten} ?`}
        />
      </View>
      <CustomModal
        cancelText={copy.retour}
        isVisible={showModal}
        onConfirm={
          isSucceed
            ? () => setShowModal(false)
            : handleSubmitModal(onPressModal)
        }
        setVisible={setShowModal}
        submitText={isSucceed ? copy.ok : copy.confirmer}
        title={copy.passwordForgotten}
        withCancel={!isSucceed}>
        {isSucceed ? (
          <PasswordSent />
        ) : (
          <ForgottenPassword control={controlModal} errors={errorsModal} />
        )}
      </CustomModal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  link: {
    color: COLORS.darkBlue,
  },
  text: {
    marginBottom: 6,
  },
});
