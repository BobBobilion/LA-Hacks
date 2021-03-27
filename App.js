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

  state = {
    openClass: 0,
    showGoing: 0,
  }

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

  addClass = () => {
    this.setState({openClass: 1});
    this.setState({ dummy: true});
  }
  
    className = () => {
      
  }


  render() {
    return (
      <View style={LibraryStyles.container}>
        <View style={styles.assignmentBox}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.sectionTitles}>Meeting Links</Text>
          <Pressable style={styles.addition} onPress={() => this.addClass()}>+</Pressable> 
        </View>
        <View>
        {this.state.showGoing == 1 ? <View><Text>OnGoing Meetings</Text><Text>{onGoingTime}{onGoingClass}</Text></View> : null}
        </View>
        {this.state.openClass == 1 ? 
        <View>
          <Text>Please Enter:</Text>
          <TextInput onPress={(nameClass) => this.className(nameClass)} style={styles.zoomInput} placeholder={"Class Name"}/>
          <TextInput onPress={(link) => this.className(link)} style={styles.zoomInput} placeholder={"Zoom Link"}/>
          <TextInput onPress={(timeS) => this.className(timeS)} style={styles.zoomInput} placeholder={"Start Time"}/>
          <TextInput onPress={(timeE) => this.className(timeE)} style={styles.zoomInput} placeholder={"End Time"}/>
        </View> 
        : null}
        </View>
        <View style={styles.assignmentBox}>
          <Text style={styles.sectionTitles}>Assignments</Text>
          <View style={{ flexDirection: 'column' }}>
            <Button
              onPress={() => console.log('button 1 pressed')}
              onPressIn={() => console.log('pressIn')}
              onPressOut={() => console.log('pressOut')}
              onLongPress={() => console.log('Longpress')}>
              button 1
            </Button>
            <View style={styles.assignments}>
              <Text>oi;jasdf</Text>
            </View>
          </View>
        </View>

        
        <NormalText>
          width: {screenDimensions.screenWidth} & height: {screenDimensions.screenHeight}
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
    margin: screenDimensions.screenWidth * 0.1,
    padding: 10,
    width: screenDimensions.screenWidth * 0.8,
  },
  sectionTitles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  assignments: {
    borderRadius: 3,
    borderWidth: 2,
    margin: screenDimensions.screenWidth * 0.02,
    backgroundColor: Colors.darkGreen,
    padding: 3,
    borderColor: Colors.darkGreen,
  },
  addition: {
    marginLeft: 10,
    fontSize: 26,
    fontWeight: 'bold',
  },
  zoomInput: {
    width: (screenWidth * .9)/2,
  }
});
  
