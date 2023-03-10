import React, { useState, useCallback } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from './Components/Button';
import AntsList from './Components/AntsList';

const App = () => {
  const [ants, setAnts] = useState([]);

  const onFetchPress = () => {
    fetch('https://sg-ants-test.herokuapp.com/ants')
      .then(response => response.json())
      .then(data => {
        const antsUpdated = data.ants.map(ant => {
          return { ...ant, status: 'Waiting...' };
        })
        setAnts(antsUpdated);
      })
      .catch(error => console.error(error));
  };

  function generateAntWinLikelihoodCalculator() {
    const delay = 7000 + Math.random() * 7000;
    const likelihoodOfAntWinning = Math.random();

    return callback => {
      setTimeout(() => {
        callback(likelihoodOfAntWinning);
      }, delay);
    };
  }

  const onRacePress = () => {
    const antsUpdated = ants.map(ant => {
      return { ...ant, status: 'Racing...' };
    });

    setAnts(antsUpdated);

    antsUpdated.forEach(ant => {
      const calculateAntWinLikelihood = generateAntWinLikelihoodCalculator();
      calculateAntWinLikelihood(likelihood => {
        const index = antsUpdated.findIndex(item => item.name === ant.name);
        antsUpdated[index].likelihood = likelihood * 100;

        const sortedAnts = antsUpdated.sort(
          (a, b) => b.likelihood - a.likelihood,
        );

        setAnts([...sortedAnts]);
      });
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          title="Fetch Ants"
          onPress={onFetchPress}
          style={styles.button}
        />
        <Button title="Race" onPress={onRacePress} style={styles.button} />

        <AntsList ants={ants} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default App;
