import * as React from 'react';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
 
export const Colors = {
  pink: '#FFC9DD',
  lightPink: '#B1C7FF',
  blue: '#96B4FF',
  yellow: '#FFE196',
  green: '#A3FFAA',
  }

export default class App extends React.Component {

  constructor() {
    super();
  }

  
  render() {
    return (
      <View style={LibraryStyles.container}>
        <View style={styles.assignmentBox}>
        <Text style={styles.sectionTitles}>Zoom Links</Text>
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

const styles = StyleSheet.create({
  assignmentBox: {
    backgroundColor : Colors.green,
    margin : screenWidth*.05,
    padding: 10,
    width: screenWidth*.9,
  },
  sectionTitles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  assignments: {
    borderRadius: 3,
    borderWidth: 2,
    margin: screenWidth*.02,
    backgroundColor: Colors.yellow,
    padding: 3,
  }
});
