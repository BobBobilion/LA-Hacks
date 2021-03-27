import * as React from 'react';
import { Text, View, Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import {
  screenDimensions,
  Colors,
  NormalText,
  Title,
  Button,
  LibraryStyles,
} from './ComponentLibrary';

export default class App extends React.Component {

  constructor() {
    super();
    
  }

  //UPDATE WINDOW
  updateWindow = () => {
    screenDimensions.screenWidth = Dimensions.get('window').width;
    screenDimensions.screenHeight = Dimensions.get('window').height;

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
      <View style={LibraryStyles.container}>
        <View style={styles.sectionBox}>
        <Text style={styles.sectionTitles}>Zoom Links</Text>
        </View>
        <View style={styles.sectionBox}>
        <Text style={styles.sectionTitles}>Assignments</Text>
          <View style={{ flexDirection: 'column' }}>
            <Button
              onPress={() => console.log('button 1 pressed')}
              onPressIn={() => console.log('pressIn')}
              onPressOut={() => console.log('pressOut')}
              onLongPress={() => console.log('Longpress')}>
              button 1
            </Button>
            <View style={styles.assignments}><Text>oi;jasdf</Text></View>
          </View>
        </View>
        
        <NormalText>
          width: {screenWidth} & height: {screenHeight}
        </NormalText>

        <View style={styles.sectionBox}>
          <Title style={styles.sectionTitles}>Zoom Meetings</Title>
          <Button
            onPress={() => console.log('button 1 pressed')}
            onPressIn={() => console.log('pressIn')}
            onPressOut={() => console.log('pressOut')}
            onLongPress={() => console.log('Longpress')}>
            button 1
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  assignmentBox: {
    backgroundColor: Colors.green,
    margin: screenWidth * 0.05,
    padding: 10,
    width: screenWidth * 0.9,
  },
  sectionTitles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  assignments: {
    borderRadius: 3,
    borderWidth: 2,
    margin: screenWidth * 0.02,
    backgroundColor: Colors.darkGreen,
    padding: 3,
    borderColor: Colors.darkGreen,
  },
});
  
