import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const AntsList = ({ ant }) => {
  const renderAntLabel = (ant) => {
    const label = ant.likelihood
      ? `${ant.name}: ${parseInt(ant.likelihood, 10)}%`
      : `${ant.name}: ${ant.status}`;

    return <Text key={ant.name}>{label}</Text>;
  }

  return <View>{renderAntLabel(ant)}</View>;
};

const styles = StyleSheet.create({

});

export default AntsList;
