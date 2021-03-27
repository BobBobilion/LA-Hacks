import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app! Have fun!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(158, 62, 41)',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
