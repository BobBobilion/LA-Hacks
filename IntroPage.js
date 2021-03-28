import * as React from 'react';
import { Text, View, Pressable, Image, StyleSheet, Dimensions, TextInput, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import {
  screenDimensions,
  Colors,
  NormalText,
  Title,
  Button,
  LibraryStyles,
} from './ComponentLibrary';
import App from './App';

export default class IntroPage extends React.Component {
    //create state here
    state = {
      canvUser: '',
      canvPass: '',
      aeUser: '',
      aePass: '',
      canPass: 'Continue',
      canAdd: 'Add',
      page: 'IntroPage',
      newClass: '',
      newLink: '',
      newTime: '',
      newEndTime: '',
      classes: [],
    };

    addClass = () => {
      if(this.state.newClass!=='' && this.state.newLink!=='' && this.state.newTime!=='' && this.state.newEndTime!==''){
        this.setState({canAdd: 'Add'});
        let classes = this.state.classes;
        let zoomLink = this.state.newLink;
        let time = this.state.newTime;
        let name = this.state.newClass;
        let moreTime = this.state.newEndTime;
        let aClassInfo = {aName: name, link: zoomLink, startTime: time, newEndTime: moreTime};
        classes.push(aClassInfo);
        this.setState({newTime: '' });
        this.setState({newClass: ''});
        this.setState({newLink: '' });
        this.setState({newEndTime: ''});
        console.log(this.state.classes);
        console.log(this.state.listClassNames);
      }else{
        this.setState({canAdd: 'Missing Info'})
      }
    };
  
    //the values in the parenthesis are the input.
    nextPage = () => {
      if(this.state.canvPass!=='' && this.state.canvUser!=='' && this.state.aePass!=='' && this.state.aeUser!==''){
        this.props.goToPage('Main');
      }else{
        this.setState({canPass: 'Please Save/Enter All Fields First'})
      }
    }
    
    
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.titleCard}>
            <Text style={styles.titleCardText}>Slink-E</Text>
            <Text style={{fontSize: 15, textAlign: 'center',}}>All your student resources in one place!</Text>
          </View>
          <View>
            <Text style={styles.title}>Please Enter:</Text>
  
            <TextInput
              onChangeText={(canvUser) => this.setState({ canvUser })}
              style={styles.infoInput}
              value={this.state.canvUser}
              placeholder={'Canvas Username'}
            />
            <TextInput
              onChangeText={(canvPass) => this.setState({ canvPass })}
              style={styles.infoInput}
              value={this.state.canvPass}
              placeholder={'Canvas Password'}
            />
  
            
  
            <Text>{'\n'}</Text>
  
            <TextInput
              onChangeText={(aeUser) => this.setState({ aeUser })}
              style={styles.infoInput}
              value={this.state.aeUser}
              placeholder={'Aeries Username/Email'}
            />
  
            <TextInput
              onChangeText={(aePass) => this.setState({ aePass })}
              style={styles.infoInput}
              value={this.state.aePass}
              placeholder={'Aeries Password'}
            />

            
  
            <View style={styles.row}>
              <View>

                <TextInput
                  placeholder={'Class Name'}
                  style={styles.infoInput}
                  value={this.state.newClass}
                  onChangeText={(newClass) => this.setState({ newClass })}
                />
                <TextInput
                  onChangeText={(newEndTime) => this.setState({ newEndTime })}
                  style={styles.infoInput}
                  value={this.state.newEndTime}
                  placeholder={'What is the end time?'}
                />
                <TextInput
                  onChangeText={(newTime) => this.setState({ newTime })}
                  style={styles.infoInput}
                  value={this.state.newTime}
                  placeholder={'What is the start time?'}
                />
      
                <TextInput
                  onChangeText={(newLink) => this.setState({ newLink })}
                  style={styles.infoInput}
                  value={this.state.newLink}
                  placeholder={'What is the meeting link?'}
                />
              </View>
              <Pressable
                style={styles.addButton}
                onPress={() => this.addClass()}>
                <NormalText>{this.state.canAdd}</NormalText>
              </Pressable>
              
            </View>




            <Pressable onPress={() => this.nextPage()} style={styles.continueButton}>
              <Text>{this.state.canPass}</Text>
            </Pressable>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      width: screenDimensions.screenWidth,
      height: screenDimensions.screenHeight,
      backgroundColor: '#CAD8DE',
      alignItems: 'center',
    },
    titleCard:{
      backgroundColor: Colors.blueGray,
      width: screenDimensions.screenWidth,
      height: Constants.statusBarHeight + 100,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    titleCardText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    classBox: {
      width: '50%',
      height: 100,
      borderColor: Colors.gray,
      borderWidth: 2,
      borderRadius: 5,
      marginVertical: 10,
      alignSelf: 'center',
    },
    classBoxTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      backgroundColor: Colors.blueGray,
    },
    classScroll: {
      width: '100%',
      backgroundColor: 'white',
      borderColor: Colors.gray,
      borderTopWidth: 2,
      padding: 5,
    },
    button: {
      padding: 5,
      margin: 5,
      width: (screenDimensions.screenWidth)*.6,
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: Colors.forestGreen,
      justifyContent: 'center',
      borderRadius: 3,
    },
    continueButton: {
      padding: 7,
      margin: 7,
      width: (screenDimensions.screenWidth)*.25,
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: Colors.cyan,
      justifyContent: 'center',
      borderRadius: 3,
      borderColor: 'white',
      borderWidth: 3,
    },
    infoInput: {
      width: (screenDimensions.screenWidth)*.8,
      backgroundColor: 'white',
      padding: 5,
      margin: 3,
      borderRadius: 3,
    },
    row: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      marginVertical: 5,
      alignContent: 'center',
    },
    addButton: {
      width: 50,
      height: '96%',
      margin: 3,
      borderColor: Colors.cyan,
      borderWidth: 2,
      backgroundColor: 'white',
      paddingTop: 2,
      borderRadius: 3,
      justifyContent: 'center',
    },
    addButtonText: {
      color: Colors.blueGray,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    title: {
      fontSize: 15,
      marginVertical: 5,
    },
  });
  