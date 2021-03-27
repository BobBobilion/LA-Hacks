import * as React from 'react';
import { Text, View, Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
 
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


export default class App extends React.Component {

  constructor() {
    super();
    
  }

  //UPDATE WINDOW
  updateWindow = () => {
    screenWidth = Dimensions.get('window').width;
    screenHeight = Dimensions.get('window').height;

    this.setState({ something: true });
  };

  //TIMER FOR WINDOW DIMENSION CHECK
  componentDidMount = () => {
    this.counter = setInterval(() => {
      this.updateWindow();
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Pressable style={styles.playButton} >
          <Text style={styles.playText}>{screenWidth}</Text>
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
    fontSize: screenWidth/2,
    textAlign: 'center',
  },
});
