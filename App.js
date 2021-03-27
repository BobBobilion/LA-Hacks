import * as React from 'react';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
 

export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Pressable style={styles.playButton} >
          <Text style={styles.playText}>▶️</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  },
  playText: {
    fontSize: 96,
    textAlign: 'center',
  },
});
