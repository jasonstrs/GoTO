import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import copy from '../../copy.json';
import CustomTextInput from '../input/CustomTextInput';
import CustomButton from '../buttons/CustomButton';
import { COLORS, SIZES, VIEWS } from '../global/constant';
import Title from '../header/Title';
import { editSeance, postSeance } from '../../services';
import { useDispatch } from 'react-redux';
import {
  addSeance,
  editSeance as editSeanceRedux,
} from '../../redux/features/training/trainingSlice';
import Container from '../global/Container';

export default function AddSeance({ navigation, route }) {
  const session = route.params.session;
  const isEdit = Boolean(session);
  const nom = session?.nom || '';

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { nom },
  });
  const dispatch = useDispatch();

  const onAddSession = body =>
    postSeance(body).then(({ data }) => {
      dispatch(addSeance({ seance: data }));
      navigation.navigate(VIEWS.session);
    });

  const onEditSession = body =>
    editSeance(body, session.id).then(({ data }) => {
      if (data.acknowledged === true && data.modifiedCount === 1) {
        dispatch(editSeanceRedux({ id: session.id, body }));
        navigation.goBack();
      }
    });

  return (
    <Container>
      <View>
        <Title
          color={COLORS.blackBlue}
          size={SIZES.extraBig}
          title={`${isEdit ? copy.modification : copy.create} 🐻`}
        />
        <Text style={styles.description}>
          {copy[`session.${isEdit ? 'edit' : 'create'}.description`]}
        </Text>
        <Controller
          control={control}
          rules={{ required: copy.requiredField }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              errors={errors.name}
              label={copy.trainingName}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="nom"
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            backgroundColor={'white'}
            borderColor={COLORS.red}
            color={COLORS.red}
            onPress={() => navigation.goBack()}
            title={copy.back}
          />
          <CustomButton
            backgroundColor={'white'}
            borderColor={COLORS.darkBlue}
            color={COLORS.blackBlue}
            onPress={handleSubmit(isEdit ? onEditSession : onAddSession)}
            styleProp={styles.addButton}
            title={isEdit ? copy.edit : copy.add}
          />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 16,
    textAlign: 'justify',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  addButton: {
    marginLeft: 12,
  },
});
