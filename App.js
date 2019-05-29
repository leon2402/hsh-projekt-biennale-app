import React, { Component } from "react";
import { StatusBar } from 'react-native'
import { Root, Spinner, Right, Text, Content, Container, Header } from "native-base";
import { Font, AppLoading } from "expo";
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import MapScreen from './screens/MapScreen';
import ImpressumScreen from './screens/ImpressumScreen';
import LocationListScreen from './screens/LocationListScreen';
import DetailsScreen from './screens/DetailsScreen';
import SideBar from './sidebar.js'

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
  }},
  {
    contentComponent: props => <SideBar {...props} />
  },
);



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
          <Container>
            <Header />
            <Content>
              <Spinner color='blue' />
                <Right><Text>Loading...</Text></Right>
            </Content>
          </Container>
        </Root>
      );
    }
    return (
      <Root>
        <StatusBar hidden={true} />
        <MyApp />
      </Root>
    );
  }
}
const MyApp = createAppContainer(MyDrawerNavigator);
