import * as React from 'react';
import { Text, View, Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
 
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export const Colors = {
  pink: '#FFC9DD',
  lightPink: '#B1C7FF',
  blue: '#96B4FF',
  yellow: '#FFE196',
  green: '#A3FFAA',
  }

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

styles = StyleSheet.create({
  assignmentBox: {
    backgroundColor : Colors.green,
    margin : screenWidth*.05,
    padding: 10,
    width: screenWidth*.9,
  },
  playText: {
    fontSize: screenWidth/2,
    textAlign: 'center',
  },
  assignments: {
    borderRadius: 3,
    borderWidth: 2,
    margin: screenWidth*.02,
    backgroundColor: Colors.yellow,
    padding: 3,
  }
});
}
