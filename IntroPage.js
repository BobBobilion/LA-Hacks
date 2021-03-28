import * as React from 'react';
import { Text, View, Pressable, Image, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native';
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
      page: 'IntroPage',
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
      width: '100%',
      height: 100,
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 5,
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
    addRemoveButton: {
      width: '20%',
      margin: 3,
      borderColor: Colors.cyan,
      borderWidth: 2,
      backgroundColor: 'white',
      paddingTop: 2,
      borderRadius: 3,
    },
    addRemoveButtonText: {
      color: Colors.blueGray,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    title: {
      fontSize: 15,
      marginVertical: 5,
    },
  });
  