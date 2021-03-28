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

export default class App extends React.Component {
    render() {
      return (
        <View style={LibraryStyles.container}>
          <Title>This is a title</Title>
          <NormalText>
            width: {screenWidth} & height: {screenHeight}
          </NormalText>
          <View style={{ flexDirection: 'row' }}>
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
  
  const styles = StyleSheet.create({});
  