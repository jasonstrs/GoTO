import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Container from '../global/Container';
import Title from '../header/Title';
import { COLORS, SIZES } from '../global/constant';
import copy from '../../copy.json';
import { useSelector, useDispatch } from 'react-redux';
import { setExercices } from '../../redux/features/training/exercicesSlice';
import { getExercices } from '../../services';

export default function SessionDetails({ route }) {
  const idSeance = route.params.idSeance;
  const dispatch = useDispatch();
  const exercices = useSelector(state => state.exercices[idSeance]);

  useEffect(() => {
    if (exercices === undefined) {
      getExercices(idSeance).then(({ data }) => dispatch(setExercices(data)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, exercices]);

  return (
    <Container>
      <Title
        color={COLORS.blackBlue}
        size={SIZES.extraBig}
        title={copy.identificate}
      />
      <Text>{`sessionDetails : ${idSeance}`}</Text>
      <Text>{`nb exercices : ${exercices?.length}`}</Text>
    </Container>
  );
}

SessionDetails.propTypes = {};

SessionDetails.defaultProps = {};
