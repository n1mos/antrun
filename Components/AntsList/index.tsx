import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AntsItem from '../AntsItem';

const AntsList = ({ ants }) => {
  return (
    <ScrollView style={styles.container}>
      {ants.map(ant => (
        <AntsItem ant={ant} status={ant.status} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default AntsList;
