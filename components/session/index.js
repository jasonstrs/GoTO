import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Title from '../header/Title';
import copy from '../../copy.json';
import { COLORS, SIZES, VIEWS } from '../global/constant';
import Select from '../select/Select';
import TouchableContainerWithIcons from '../container/TouchableContainerWithIcons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Item from './Item';
import { getMuscles, getSeances, removeSeance } from '../../services';
import CustomModal from '../modal/Modal';
import CustomButton from '../buttons/CustomButton';
import { navigate } from '../global/rootNavigation';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMuscles,
  setSeances,
  removeSeance as removeSeanceRedux,
} from '../../redux/features/training/trainingSlice';
import Container from '../global/Container';

export default function Session() {
  const dispatch = useDispatch();
  const { muscles, seances } = useSelector(state => state.training);
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const defaultMuscle = { label: copy.allMuscles, value: 'all' };
    setSelectedMuscle(defaultMuscle.value);

    getMuscles().then(({ data }) =>
      dispatch(setMuscles({ muscles: [defaultMuscle, ...data] })),
    );

    getSeances().then(({ data }) => dispatch(setSeances({ seances: data })));
  }, [dispatch]);

  const onPress = idSeance => navigate(VIEWS.sessionDetails, { idSeance });

  const onCan = () =>
    removeSeance(selectedId).then(({ data }) => {
      if (data.acknowledged === true && data.deletedCount === 1) {
        dispatch(removeSeanceRedux({ id: selectedId }));
      }
      setSelectedId(null);
    });

  const icons = [{ onPress: setSelectedId, source: faTrashCan }];

  return (
    <Container>
      <Title
        color={COLORS.blackBlue}
        size={SIZES.extraBig}
        title={`${copy.training} 🦊`}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          borderColor={'black'}
          color={'black'}
          onPress={() => navigate(VIEWS.addSeance)}
          title={'Ajouter une séance  ⚒'}
        />
      </View>
      <Text style={styles.text}>{copy.searchMuscle}</Text>
      <View style={styles.select}>
        <Select
          onChange={setSelectedMuscle}
          value={selectedMuscle}
          values={muscles}
        />
      </View>
      {seances.map(seance => (
        <TouchableContainerWithIcons
          icons={icons}
          id={seance.id}
          key={seance.id}
          onPress={() => onPress(seance.id)}>
          <Item seance={seance} />
        </TouchableContainerWithIcons>
      ))}
      {!seances.length && (
        <Text style={styles.noTraining}>{copy['seance.create']}</Text>
      )}
      <CustomModal
        cancelText={copy.annuler}
        isVisible={Boolean(selectedId)}
        onConfirm={onCan}
        setVisible={setSelectedId}
        submitText={copy.confirmer}
        title={copy['seance.modal.remove']}>
        <Text>{copy['seance.modal.sure']}</Text>
      </CustomModal>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 8,
  },
  select: {
    marginBottom: 8,
  },
  noTraining: {
    textAlign: 'justify',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});
