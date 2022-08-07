import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Container from '../global/Container';
import Title from '../header/Title';
import { COLORS, SIZES } from '../global/constant';
import copy from '../../copy.json';
import { useSelector, useDispatch } from 'react-redux';
import { setExercices } from '../../redux/features/training/exercicesSlice';
export default function SessionDetails({ route }) {
  const idSeance = route.params.idSeance;
  const dispatch = useDispatch();
  const exercices = useSelector(state => state.exercices[idSeance]);

  useEffect(() => {
    if (exercices === undefined) {
      console.log('on get le state');
      // get exercices and set
      // dispatch(setExercices(fakeExo));
    }
  }, [dispatch, exercices]);

  return (
    <Container>
      <Title
        color={COLORS.blackBlue}
        size={SIZES.extraBig}
        title={copy.identificate}
      />
      <Text>{`sessionDetails : ${idSeance}`}</Text>
    </Container>
  );
}

SessionDetails.propTypes = {};

SessionDetails.defaultProps = {};
