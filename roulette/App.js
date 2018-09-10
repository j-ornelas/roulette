import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import canistreamit from 'canistreamit';
import data from './DATA/ew.json';

const randomIntFromInterval = (min, max) => {
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  if (result < min) {
    result = min;
  } else if (result > max) {
    result = max;
  }
  return result;
};

const firstNumber = randomIntFromInterval(930, 1930);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: '',
      selectedID: null
    };
    this.state.selectedID = firstNumber;
    this.state.selectedMovie = data[firstNumber];
  }

  render() {
    canistreamit.search(this.state.selectedMovie)
      .then(results => console.log(results));
    return (
      <View style={styles.container}>
        <Text>{this.state.selectedMovie}</Text>
      </View>
    );
  }
}
