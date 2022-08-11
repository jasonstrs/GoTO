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
import Loading from '../loading';
import { isEmpty } from 'lodash';
import copy from '../../copy.json';
import Timer from './Timer';

const getDuree = exercices => {
  var count = 0;
  exercices?.forEach(exercice => (count += Number(exercice.duree)));
  return count;
};

export default function SessionDetails({ navigation, route }) {
  const idSeance = route.params.idSeance;
  const dispatch = useDispatch();
  const sessions = useSelector(state => state.training.seances);
  const session = sessions.find(obj => obj.id === idSeance);
  const exercices = useSelector(state => state.exercices[idSeance]);
  const muscles = Array.from(
    new Set(exercices?.map(exo => copy[`muscle.${exo.muscle}`])),
  );
  const duree = getDuree(exercices);

  useEffect(() => {
    if (exercices === undefined) {
      getExercices(idSeance).then(({ data }) => dispatch(setExercices(data)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, exercices]);

  const onPress = () => navigation.navigate(VIEWS.addSeance, { session });

  return isEmpty(session) ? (
    <Loading />
  ) : (
    <Container>
      <View style={styles.header}>
        <Title
          color={COLORS.blackBlue}
          size={SIZES.extraBig}
          title={session.nom}
        />
        <TouchableOpacity onPress={onPress} style={styles.pencil}>
          <FontAwesomeIcon icon={faPencil} />
        </TouchableOpacity>
      </View>
      <View style={styles.sessionDetails}>
        <Timer time={duree} />
        <View style={styles.sessionInfo}>
          <Text style={styles.title}>En détails</Text>
          <Text style={styles.text}>
            {`💪 ${exercices?.length} ${copy.exercices}`}
          </Text>
          <Text style={styles.text}>{`🏋️‍♀️ ${muscles.join(', ')}`}</Text>
          <Text style={styles.text}>
            {`Ressenti : ${copy[`ressenti.${session.ressenti}`]}`}
          </Text>
        </View>
      </View>
      <Title
        color={COLORS.blackBlue}
        size={SIZES.extraBig}
        title={copy.myExercices}
      />
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
  sessionDetails: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  sessionInfo: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: COLORS.blue,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  text: {
    fontSize: 14,
  },
});
