import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import MapScreen from './screens/MapScreen';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Map: {
    screen: MapScreen,
  },
});

export default class App extends Component {

  render() {
    return (
      <MyApp />
    );
  }
}
const MyApp = createAppContainer(MyDrawerNavigator);
