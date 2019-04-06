import React, { Component } from "react";
import { Root } from "native-base";
import { Font, AppLoading } from "expo";
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import MapScreen from './screens/MapScreen';
import ImpressumScreen from './screens/ImpressumScreen';
import LocationListScreen from './screens/LocationListScreen';
import DetailsScreen from './screens/DetailsScreen';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Map: {
    screen: MapScreen,
  },
  LocationList: {
    screen: LocationListScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Impressum: {
    screen: ImpressumScreen,
  },
});



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  
  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <MyApp />
      </Root>
    );
  }
}
const MyApp = createAppContainer(MyDrawerNavigator);
