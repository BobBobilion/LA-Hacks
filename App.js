import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import {
  screenWidth,
  screenHeight,
  Colors,
  NormalText,
  Title,
  Button,
  LibraryStyles,
} from './ComponentLibrary';
import GestureRecognizer from 'react-native-swipe-gestures';

const timeLimit = 900;
const targetShrinkRatio = 0.9;
const targetChangeDirectionChance = 0.07;
const immuneTime = 30;
const fps = 60;
const lavender = '#A994FF';
const darkLavender = '#878DE8';
const blue = '#A0BFFF';
const darkblue = '#87C1E8';
const cyan = '#94F0FF';

export default class App extends React.Component {
  //Step 2 : have the location and size deermined by variables
  state = {
    player: {
      x: screenWidth / 2 - 30,
      y: screenHeight / 2 - 60,
      radius: 30,
      dx: 2,
      dy: 3,
      speed: 5,
      score: 0,
    },
    target: {
      x: screenWidth - 200,
      y: 0,
      radius: 30,
      dx: 2,
      dy: 4,
      speed: 5,
      dh: 2,
      lastTag: -100,
    },
    counter: 0,
  };

  reset = () => {
    this.setState({
      player: {
        x: screenWidth / 2 - 30,
        y: screenHeight / 2 - 60,
        radius: 30,
        dx: 2,
        dy: 3,
        speed: 5,
        score: 0,
      },
      target: {
        x: screenWidth - 200,
        y: 0,
        radius: 30,
        dx: 2,
        dy: 4,
        speed: 5,
        dh: 2,
        lastTag: -100,
      },
      counter: 0,
    });
    this.screenRefresher = setInterval(this.update, 1000 / fps);
  };

  changeTargetDirection = () => {
    let target = this.state.target;
    let direction = Math.random() * 2 * Math.PI;
    target.dx = Math.cos(direction) * target.speed;
    target.dy = Math.sin(direction) * target.speed;
  };

  //UPDATE
  update = () => {
    if (this.state.counter > timeLimit) {
      clearInterval(this.screenRefresher);
    }

    let { player, target, counter } = this.state;
    player.x += player.dx;
    player.y += player.dy;
    target.x += target.dx;
    target.y += target.dy;

    if (Math.random() < targetChangeDirectionChance) {
      this.changeTargetDirection();
    }

    if (counter > target.lastTag + immuneTime) {
      let hDist = player.x + player.radius - (target.x + target.radius);
      let vDist = player.y + player.radius - (target.y + target.radius);
      let dist = Math.sqrt(hDist * hDist + vDist * vDist);
      if (dist < player.radius + target.radius) {
        player.score++;
        target.lastTag = this.state.counter;
        target.radius *= targetShrinkRatio;
      }
    }

  //player bounce
    if (player.x > screenWidth - 2 * player.radius) {
      player.dx = -Math.abs(player.dx);
    } else if (player.x < 0) {
      player.dx = Math.abs(player.dx);
    }
    if (player.y > screenHeight - 2 * player.radius) {
      player.dy = -Math.abs(player.dy);
    }
    if (player.y < 0) {
      player.dy = Math.abs(player.dy);
    }

  //target bouce
    if (target.x > screenWidth - 2 * target.radius) {
      target.dx = -Math.abs(target.dx);
    } else if (target.x < 0) {
      target.dx = Math.abs(target.dx);
    }
    if (target.y > screenHeight - 2 * target.radius) {
      target.dy = -Math.abs(target.dy);
    }
    if (target.y < 0) {
      target.dy = Math.abs(target.dy);
    }
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  //REFRESHES SCREEN
  componentDidMount = () => {
    this.screenRefresher = setInterval(this.update, 1000 / fps);
  };

  //CHANGES DIRECTION BY SWIPE
  onSwipe = (direction) => {
    let player = this.state.player;
    switch (direction) {
      case 'SWIPE_UP':
        player.dx = 0;
        player.dy = -1 * player.speed;
        break;
      case 'SWIPE_LEFT':
        player.dx = -1 * player.speed;
        player.dy = 0;
        break;
      case 'SWIPE_RIGHT':
        player.dx = player.speed;
        player.dy = 0;
        break;
      case 'SWIPE_DOWN':
        player.dx = 0;
        player.dy = player.speed;
        break;
    }
  };

  //RENDER FUNCTION
  render() {
    let { player, target } = this.state;
    return (
      <GestureRecognizer
        onSwipe={(direction) => this.onSwipe(direction)}
        style={LibraryStyles.container}>
        <View
          source={require('./assets/icon.png')} 
          style={{
            backgroundColor: Colors.accent1,
            position: 'absolute',
            left: target.x,
            top: target.y + Constants.statusBarHeight,
            width: 2 * target.radius,
            height: 2 * target.radius,
            borderRadius: player.radius,
            resizeMode: 'contain',
            transform: [{ rotate: target.theta + 'deg' }],
          }}
        />
        <View
          source={require('./assets/favicon.png')}
          style={{
            backgroundColor: Colors.accent2,
            position: 'absolute',
            top: player.y + Constants.statusBarHeight,
            left: player.x,
            width: 2 * player.radius,
            height: 2 * player.radius,
            borderRadius: player.radius,
          }}
        />
        {this.state.counter > timeLimit ? (
          <Button onPress={() => this.reset()}>Game Over. Play again? </Button>
        ) : null}
        <NormalText>score: {player.score}</NormalText>
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({});
