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
    let extraAssignments = [];

    Data.forEach((element, index) => {
      let className = element.ClassName;
      let assignmentName = element.AssignmentName;
      let dueDate = element.DueDate;
      let assignment = {
        Class: className,
        Assignment: assignmentName,
        Due: dueDate,
      };
      if(index<4){
        assignments.push(assignment);
      } else{
        extraAssignments.push(assignment);
      }
      
    });

    this.state = {
      assignments,
      practiceSet: {
        sun:[{}],
        mon:[{
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
        }],
  
        tues:[{
          meetingLink: "link3",
          className: "Arthur Facredyn3",
          startTime: "12",
          endTime: "13",
        }],
  
        wed:[{
          meetingLink: "link4",
          className: "Arthur Facredyn4",
          startTime: "8",
          endTime: "10",
        }],
  
        thurs:[{
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
        }],
  
        fri:[{
          meetingLink: "link7",
          className: "Arthur Facredyn7",
          startTime: "14",
          endTime: "16",
        },],
        
        sat:[{}]
      },

        openAssignment: 0,
        openClass: 0,
        assignClass: '',
        assignName: '',
        assignDue: '',
        showGoing: 0,
        day: '',
        nameClass: '',
        link: '',
        timeStart: '',
        timeEnd: '',
    }
    
  }



  //UPDATE WINDOW
  updateWindow = () => {
    screenDimensions.screenWidth = Dimensions.get('window').width;
    screenDimensions.screenHeight = Dimensions.get('window').height;
  }

  //TIMER FOR WINDOW DIMENSION CHECK
  componentDidMount = () => {
    this.counter = setInterval(() => {
      this.updateWindow();
    }, 500);
    this.setDate();
  }

  //MAKES A TABLE FOR ASSIGNMENTS
  listAssignments = () => {
    let assignments = this.state.assignments;
    return assignments.map((assignment, index) => (
      <View style={{paddingHorizontal: (screenDimensions.screenWidth*.1)/4, marginVertical: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: ((index%2==1)?Colors.gray : Colors.lightGray) }}>
        <View style={{flex:1}}><NormalText>      {assignment.Class}</NormalText></View>
        <View style={{flex:1}}><NormalText>      {assignment.Assignment}</NormalText></View>
        <View style={{flex:1}}><NormalText>      {assignment.Due}</NormalText></View>
      </View>  
    )) 
  }

  listGrades = () => {
    let assignments = this.state.assignments;
    return assignments.map((assignment, index) => (
      <View style={{paddingHorizontal: (screenDimensions.screenWidth*.1)/4, marginVertical: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: ((index%2==1)?Colors.gray : Colors.lightGray) }}>
        <View style={{flex:1}}><NormalText>     {assignment.Class}</NormalText></View>
        <View style={{flex:1}}><NormalText>     {assignment.Due}</NormalText></View>
      </View>  
    )) 
  }

  setDate = () => {
    this.setState({day: (new Date()).getDay()});
  }

  addClass = () => {
    this.setState({openClass: 1});
    
  }

  addAssignment = () => {
    this.setState({openAssignment: 1});
    this.setState({
      assignClass: '',
      assignName: '',
      assignDue: '',
    })
  }
  
  addClassFinish = () => {
    this.setState({openClass: 0});
    let part = [{
        meetingLink: this.state.link,
        className: this.state.nameClass,
        startTime: this.state.timeStart,
        endTime: this.state.timeEnd,
    }];
    let something = this.state.sub;
    something.push(part);
    this.setState({sub: something});
    this.setState({dummy: true});
  }

  addAssignmentFinish = () => {
    this.setState({openAssignment: 0});
    let part = {
        Class: this.state.assignClass,
        Assignment: this.state.assignName,
        Due: this.state.assignDue,
    };
    let other = this.state.assignments;
    other.push(part);
    this.setState({assignments: other});
    this.setState({dummy: true});
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
          <TextInput onChangeText={(nameClass) => this.setState({ nameClass })} style={styles.zoomInput} value={this.state.nameClass} placeholder={"Class Name"}/>
          <TextInput onChangeText={(link) => this.setState({ link })} style={styles.zoomInput} value={this.state.link} placeholder={"Zoom Link"}/>
          <TextInput onChangeText={(timeStart) => this.setState({ timeStart })} style={styles.zoomInput} value={this.state.timeStart} placeholder={"Start Time"}/>
          <TextInput onChangeText={(timeEnd) => this.setState({ timeEnd })} style={styles.zoomInput} value={this.state.timeEnd} placeholder={"End Time"}/>
          <Pressable onPress={() => this.addClassFinish()}>
            <Text>
              Click to Add
            </Text>
          </Pressable>
        </View> 
        : null}
        </View>
        <View style={styles.assignmentBox}>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.headerBox}>
            <Text style={styles.sectionTitles}>Assignments</Text>
          </View>
            <Pressable style={styles.addition} onPress={() => this.addAssignment()}>+</Pressable>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.tables}>
            <View style={{flex:1}}><NormalText>Class:</NormalText></View>
              <View style={{flex:1}}><NormalText>Assignment Name:</NormalText></View>
              <View style={{flex:1}}><NormalText>Due Date:</NormalText></View>
            </View>  
            <View>{this.listAssignments()}</View>
            {this.state.openAssignment == 1 ? 
        <View>
          <Text>Please Enter:</Text>
          <TextInput onChangeText={(assignClass) => this.setState({ assignClass })} style={styles.zoomInput} value={this.state.assignClass} placeholder={"Class Name"}/>
          <TextInput onChangeText={(assignName) => this.setState({ assignName })} style={styles.zoomInput} value={this.state.assignName} placeholder={"Assignment Title"}/>
          <TextInput onChangeText={(assignDue) => this.setState({ assignDue })} style={styles.zoomInput} value={this.state.assignDue} placeholder={"Due Date"}/>
          <Pressable onPress={() => this.addAssignmentFinish()}>
            <Text>
              Click to Add
            </Text>
          </Pressable>
        </View> 
        : null}
        {this.state.assignDue}
          </View>
        </View>

        <View style={styles.assignmentBox}>
          <View style={styles.headerBox}>
            <Text style={styles.sectionTitles}>Grades</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.tables}>
            <View style={{flex:1}}><NormalText>Class:</NormalText></View>
              <View style={{flex:1}}><NormalText>Grade Percentage:</NormalText></View>
            </View>  
            <View>{this.listGrades()}</View>
          </View>
        </View>

        
        <NormalText>
          {this.state.practiceSet.mon[0].meetingLink}
          {(new Date()).getMilliseconds()}
        </NormalText>
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
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
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
    paddingHorizontal: (screenDimensions.screenWidth*.1)/4,
    marginVertical: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.gray,
  }
});
  
