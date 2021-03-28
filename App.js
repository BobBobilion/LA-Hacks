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
import Main from './Main';
import IntroPage from './IntroPage';




export default class App extends React.Component {
  state = {
    page: 'Home',
  };

  pickPageToRender = () => {
    if (this.state.page === 'Main') {
      return <Main goToPage={(page) => this.setState({ page })} />;
    } else {
      return <IntroPage goToPage={(page) => this.setState({ page })} />;
    }
  };

  render() {
    return <View style={styles.container}>{this.pickPageToRender()}</View>;
  }
  
}
const styles = StyleSheet.create({ 
  container: {
    height: screenDimensions.screenHeight,
    width: screenDimensions.screenWidth,
    paddingTop: Constants.statusBarHeight,
  },
});
