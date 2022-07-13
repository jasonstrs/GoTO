import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CustomTextInput from '../input/CustomTextInput';
import copy from '../../copy.json';
import ButtonLink from '../buttons/ButtonLink';
import { COLORS, SIZES } from '../global/constant';
import CustomButton from '../buttons/CustomButton';
import Title from '../header/Title';
import PasswordInput from '../input/PasswordInput';
import { isEmpty } from 'lodash';
import Banner from '../banner/Banner';

export default function Connexion({ navigation, route }) {
  const [showBanner, setShowBanner] = useState(false);
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

  useEffect(() => {
    if (!isEmpty(route.params.user)) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, [route.params.user]);

  const onSubmit = data => console.log(data);

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
          func={() => navigation.navigate('Home')}
          style={styles.link}
          title={copy.passwordForgotten}
        />
      </View>
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
