import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Pressable,
} from 'react-native';
import Constants from 'expo-constants';

// const webPreviewWidth;
// const webPreviewHeight;
// export const screenWidth =
//   Platform.OS === 'web' ? webPreviewWidth : Dimensions.get('screen').width;
// export const screenHeight =
//   Platform.OS === 'web'
//     ? webPreviewHeight
//     : Dimensions.get('screen').height - Constants.statusBarHeight;

export var screenDimensions = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
}

//THEME COLORS
export const Colors = {
    skyBlue: '#A8D1FF',
    blueGray: '#99D3E8',
    cyan: '#B5FEFE',
    green: '#A8FFCE',
    darkGreen: '#99E8D2',
    forestGreen: '#8BCCA8',
    lightGray: '#EBEBEB',
    gray: '#DEDCDC'
    }

export class NormalText extends React.Component {
  render = () => {
    return <Text style={[LibraryStyles.normalText, this.props.style]}>{this.props.children}</Text>;
  };
}

//TITLE TEXT
export class Title extends React.Component {
  render = () => {
    return <Text style={[LibraryStyles.title, this.props.style]}>{this.props.children}</Text>;
  };
}

export class Button extends React.Component {
  render = () => {
    return (
      <Pressable
        onPressIn = {this.props.onPressIn}
        onLongPress = {this.props.onLongPress}
        onPressOut = {this.props.onPressOut}
        onPress = {this.props.onPress}
        style={({ pressed }) =>
          pressed ? [LibraryStyles.buttonPressed, this.props.pressedStyle] : [LibraryStyles.button, this.props.style]
        }>
        { ({pressed}) => 
        <Text style={pressed? [LibraryStyles.buttonPressedText, this.props.pressedTextStyle] : [LibraryStyles.buttonText, this.props.textStyle]}>{this.props.children}</Text> }
      </Pressable>
    );
  };
}

export const LibraryStyles = StyleSheet.create({
  container: {
    width: screenDimensions.screenWidth,
    height: screenDimensions.screenHeight + Constants.statusBarHeight,
    backgroundColor: Colors.blueGray,
    paddingTop: Constants.statusBarHeight,
  },
  normalText: {
    margin: 5,
    fontSize: 18,
    color: Colors.light,
  },
  title: {
    margin: 5,
    fontSize: 36,
    color: Colors.accent1,
    fontWeight: 'bold',
  },
  button: {
    margin: 5,
    padding: 10,
    borderWidth: 3,
    borderColor: Colors.accent1,
    borderRadius: 4,
    backgroundColor: Colors.light,
    alignItems: 'center',
  },
  buttonPressed: {
    margin: 5,
    padding: 10,
    borderWidth: 3,
    borderColor: Colors.accent1,
    borderRadius: 4,
    backgroundColor: Colors.dark,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: Colors.dark,
  },
  buttonPressedText: {
    fontSize: 18,
    color: Colors.light,
  },
});
