import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import {
  screenWidth,
  screenHeight,
  Colors,
  NormalText,
  Title,
  Button,
  LibraryStyles,
} from './ComponentLibrary';

const timeLimit = 900;
const targetShrinkRatio = 0.9;
const targetChangeDirectionChance = 0.07;
const immuneTime = 30;
const fps = 60;
const pink = '#FFC9DD';
const lightPink = '#B1C7FF';
const blue = '#96B4FF';
const yellow = '#FFE196';
const green = '#A3FFAA';



export default class App extends React.Component {
  //Step 2 : have the location and size deermined by variables
  state = {
    player: {
      x: screenWidth / 2 - 30,
      y: screenHeight / 2 - 60,
      radius: 30,
      dx: 2,
      dy: 3,
      speed: 5,
      score: 0,
    },
    target: {
      x: screenWidth - 200,
      y: 0,
      radius: 30,
      dx: 2,
      dy: 4,
      speed: 5,
      dh: 2,
      lastTag: -100,
    },
    counter: 0,
  };

  

  //UPDATE
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

  //RENDER FUNCTION
  render() {
    return (
    );
  }
}

const styles = StyleSheet.create({
  assignmentBox: {
    backgroundColor : '#94F0FF',
    margin : screenWidth*.05,
    padding: 10,
    width: screenWidth*.9,
  },
  sectionTitles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});
