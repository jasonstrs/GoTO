import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import copy from '../../copy.json';
import CustomTextInput from '../input/CustomTextInput';
import CustomButton from '../buttons/CustomButton';
import { COLORS, SIZES, VIEWS } from '../global/constant';
import Title from '../header/Title';
import { postSeance } from '../../services';
import { useDispatch } from 'react-redux';
import { addSeance } from '../../redux/features/training/trainingSlice';
import Container from '../global/Container';

export default function AddSeance({ isEdit, name, navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name },
  });
  const dispatch = useDispatch();

  const onAddSession = body =>
    postSeance(body).then(({ data }) => {
      dispatch(addSeance({ seance: data }));
      navigation.navigate(VIEWS.session);
    });

  return (
    <Container>
      <View>
        <Title
          color={COLORS.blackBlue}
          size={SIZES.extraBig}
          title={`${copy.create} 🐻`}
        />
        <Text style={styles.description}>
          {copy['session.create.description']}
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
          name="name"
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            backgroundColor={'white'}
            borderColor={COLORS.red}
            color={COLORS.red}
            onPress={() => navigation.navigate(VIEWS.session)}
            title={copy.back}
          />
          <CustomButton
            backgroundColor={'white'}
            borderColor={COLORS.darkBlue}
            color={COLORS.blackBlue}
            onPress={handleSubmit(onAddSession)}
            styleProp={styles.addButton}
            title={isEdit ? copy.edit : copy.add}
          />
        </View>
      </View>
    </Container>
  );
}

AddSeance.propTypes = {
  isEdit: PropTypes.bool,
  name: PropTypes.string,
};

AddSeance.defaultProps = {
  isEdit: false,
  name: '',
};

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
