import * as React from 'react';
import { Text, View, Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import {} from './ComponentLibrary'

export default class App extends React.Component {

  constructor() {
    super();
    
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

        <View style={{ flexDirection: 'row' }}>
          <Button
            onPress={() => console.log('button 1 pressed')}
            onPressIn={() => console.log('pressIn')}
            onPressOut={() => console.log('pressOut')}
            onLongPress={() => console.log('Longpress')}>
            button 1
          </Button>
          <Title>Essays</Title>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionBox: {
    backgroundColor: '#94F0FF',
    margin: screenWidth * 0.05,
    padding: 10,
    width: screenWidth * 0.9,
  },
  playText: {
    fontSize: screenWidth/2,
    textAlign: 'center',
  },

});
  
