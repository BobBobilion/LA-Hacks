import * as React from 'react';
import { Text, View, Pressable, Image, StyleSheet, Dimensions, TextInput } from 'react-native';
import Constants from 'expo-constants';
import {
  screenDimensions,
  Colors,
  NormalText,
  Title,
  Button,
  LibraryStyles,
} from './ComponentLibrary';
import { Data } from './Data';



export default class App extends React.Component {

  constructor() {
    super();
    let assignments = [];

    Data.forEach((element, index) => {
      let className = element.ClassName;
      let assignmentName = element.AssignmentName;
      let dueDate = element.DueDate;
      let assignment = {
        Class: className,
        Assignment: assignmentName,
        Due: dueDate,
      };
      assignments.push(assignment);
    });

    this.state = {
      assignments,
    }
    
  }

  state = {
    openClass: 0,
    showGoing: 0,
    day: '',
    nameC: '',
    link: '',
    timeStart: '',
    timeEnd: '',

    practiceSet: [
      {
        meetingLink: "link",
        className: "Arthur Facredyn",
        startTime: "9",
        endTime: "12",
      },
      {
        meetingLink: "link2",
        className: "Arthur Facredyn2",
        startTime: "9",
        endTime: "12",
      },
      {
        meetingLink: "link3",
        className: "Arthur Facredyn3",
        startTime: "12",
        endTime: "13",
      },
      {
        meetingLink: "link4",
        className: "Arthur Facredyn4",
        startTime: "8",
        endTime: "10",
      },
      {
        meetingLink: "link5",
        className: "Arthur Facredyn5",
        startTime: "9",
        endTime: "12",
      },
      {
        meetingLink: "link6",
        className: "Arthur Facredyn6",
        startTime: "7",
        endTime: "9",
      },
      {
        meetingLink: "link7",
        className: "Arthur Facredyn7",
        startTime: "14",
        endTime: "16",
      },],
  }


  //UPDATE WINDOW
  updateWindow = () => {
    screenDimensions.screenWidth = Dimensions.get('window').width;
    screenDimensions.screenHeight = Dimensions.get('window').height;
  };

  //TIMER FOR WINDOW DIMENSION CHECK
  componentDidMount = () => {
    this.counter = setInterval(() => {
      this.updateWindow();
    }, 500);
    this.setDate();
  }

  //MAKES A TABLE FOR ASSIGNMENTS
  listAssignments = () => {
    return this.state.assignments.map((assignment) => (
      <View style={styles.tables}>
        <View style={{flex:.2}}><Text>{assignment.Class}:</Text></View>
        <View style={{flex:.3}}><Text>{assignment.Assignment}</Text></View>
        <View style={{flex:.1}}><Text>{assignment.Due}</Text></View>
      </View>  
    )) 
  }

  setDate = () => {
    this.setState({day: (new Date()).getDay()});
  }

  addClass = () => {
    this.setState({openClass: 1});
    this.setState({ dummy: true});
  }
  
    className = () => {
      
  }

    linkFunc = () => {

  }

    timeSFunc = () => {

  }

    timeEFunc = () => {

  }




  render() {
    return (
      <View style={LibraryStyles.container}>
        <View style={styles.assignmentBox}>
          <View style={{flexDirection: "row"}}>
            <View style={styles.headerBox}>
              <Text style={styles.sectionTitles}>Meeting Links</Text>
            </View>
            <Pressable style={styles.addition} onPress={() => this.addClass()}>+</Pressable> 
          </View>
        <View>
        {this.state.showGoing == 1 ? <View><Text>OnGoing Meetings</Text><Text>{onGoingTime}{onGoingClass}</Text></View> : null}
        </View>
        {this.state.openClass == 1 ? 
        <View>
          <Text>Please Enter:</Text>
          <TextInput onPress={(nameClass) => this.className(nameClass)} style={styles.zoomInput} value={this.state.nameC} placeholder={"Class Name"}/>
          <TextInput onPress={(link) => this.linkFunc(linkInput)} style={styles.zoomInput} value={this.state.link} placeholder={"Zoom Link"}/>
          <TextInput onPress={(timeS) => this.timeSFunc(timeS)} style={styles.zoomInput} value={this.state.timeStart} placeholder={"Start Time"}/>
          <TextInput onPress={(timeE) => this.timeEFunc(timeE)} style={styles.zoomInput} value={this.state.timeEnd} placeholder={"End Time"}/>
        </View> 
        : null}
        </View>
        <View style={styles.assignmentBox}>
          <View style={styles.headerBox}>
            <Text style={styles.sectionTitles}>Assignments</Text>
          </View>
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

        <View style={styles.assignmentBox}>
          <View style={styles.headerBox}>
            <Text style={styles.sectionTitles}>Grades</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Button
              onPress={() => console.log('button 1 pressed')}
              onPressIn={() => console.log('pressIn')}
              onPressOut={() => console.log('pressOut')}
              onLongPress={() => console.log('Longpress')}>
              button 1
            </Button>
            <View style={styles.tables}>
              <View style={{flex:.2}}><Text>Class</Text></View>
              <View style={{flex:.3}}><Text>Assignment Name</Text></View>
              <View style={{flex:.1}}><Text>Due Date</Text></View>
            </View>  
            <View style={styles.table}>{this.listAssignments()}</View>
            <View style={styles.assignments}>
              <Text>oi;jasdf</Text>
            </View>
          </View>
        </View>

        
        <NormalText>
          {this.state.day}
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
    backgroundColor: 'white',
    margin: screenDimensions.screenWidth * 0.05,
    padding: 10,
    width: screenDimensions.screenWidth * 0.9,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerBox: {
    backgroundColor: Colors.green,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: screenDimensions.screenWidth * 0.9,
    height: 50,
    left: -10,
    top: -10,
    padding: 10,
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
    width: (screenDimensions.screenWidth * .9)/2,
  },
  tables: {
    margin: screenDimensions.screenWidth*.4,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
  
