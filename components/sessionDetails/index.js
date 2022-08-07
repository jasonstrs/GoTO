import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Container from '../global/Container';

export default function SessionDetails({ route }) {
  const idSeance = route.params.idSeance;

  return (
    <Container>
      <Text>{`sessionDetails : ${idSeance}`}</Text>
    </Container>
  );
}

SessionDetails.propTypes = {};

SessionDetails.defaultProps = {};
