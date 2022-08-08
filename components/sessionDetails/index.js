import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Container from '../global/Container';
import Title from '../header/Title';
import { COLORS, SIZES, VIEWS } from '../global/constant';
import { useSelector, useDispatch } from 'react-redux';
import { setExercices } from '../../redux/features/training/exercicesSlice';
import { getExercices } from '../../services';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

export default function SessionDetails({ navigation, route }) {
  const idSeance = route.params.idSeance;
  const dispatch = useDispatch();
  const exercices = useSelector(state => state.exercices[idSeance]);
  const sessions = useSelector(state => state.training.seances);
  const session = sessions.find(obj => obj.id === idSeance);

  useEffect(() => {
    if (exercices === undefined) {
      getExercices(idSeance).then(({ data }) => dispatch(setExercices(data)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, exercices]);

  const onPress = () => navigation.navigate(VIEWS.addSeance, { session });

  return (
    <Container>
      <View style={styles.header}>
        <Title
          color={COLORS.blackBlue}
          size={SIZES.extraBig}
          title={session?.nom}
        />
        <TouchableOpacity onPress={onPress} style={styles.pencil}>
          <FontAwesomeIcon icon={faPencil} />
        </TouchableOpacity>
      </View>
      <Text>{`nb exercices : ${exercices?.length}`}</Text>
    </Container>
  );
}

SessionDetails.propTypes = {};

SessionDetails.defaultProps = {};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  pencil: {
    marginTop: 10,
    marginLeft: 8,
  },
});
