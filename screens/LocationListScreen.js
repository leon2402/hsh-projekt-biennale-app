import React from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, List, ListItem, Thumbnail } from 'native-base';
import firebase from '../firebase';

export default class LocationListScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'LocationList '
  };

  constructor() {
    super();
    this.ref = firebase.firestore().collection('locations');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      locations: [],
        locationsEurope: [],
        locationsAsia: [],
        locationsAmerica: [],
        locationsAfrica: [],
        locationsOceania: [],
        Screen: 'LocationList'
    };
  }
  onCollectionUpdate = (querySnapshot) => {
    const locations = [];
    querySnapshot.forEach((doc) => {
      const { name, continent, imageLink, address, openFromTo, latitude, longitude, title } = doc.data();
      locations.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        continent,
        imageLink,
        address, 
        openFromTo,
        latitude,
        longitude,
        title
      });
    });
    const locationsEurope = locations.filter(item => item.continent == "europe")
    const locationsAsia = locations.filter(item => item.continent == "asia")
    const locationsAmerica = locations.filter(item => item.continent == "america")
    const locationsAfrica = locations.filter(item => item.continent == "africa")
    const locationsOceania = locations.filter(item => item.continent == "oceania")
    this.setState({
      locations,
      locationsEurope,
      locationsAsia,
      locationsAmerica,
      locationsAfrica,
      locationsOceania,
      isLoading: false,
   });
    
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    if(this.state.isLoading){
      return(
        <Container>
          <Text>Loading</Text>
        </Container>
      )
    }else {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
              </Button>
            </Left>
            <Body>
              <Title>Location List</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <List>
              <ListItem itemDivider>
                <Text>Europe</Text>
              </ListItem>
              { 
              this.state.locationsEurope.map((item, key) => (
                <ListItem key={key} onPress={() => {
                  /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Details', {
                        itemName: item.name,
                        itemImageLink: item.imageLink,
                        itemAddress: item.address,
                        itemOpeningHours: item.openFromTo,
                        itemLatitude: item.latitude,
                        itemLongitude: item.longitude,
                        itemTitle: item.title,
                        screen: this.state.Screen
                    });
                  }}>
                  <Left>
                      <Thumbnail square source={{ uri: item.imageLink }} />
                  </Left>
                  <Body>
                      
                      <Text>{item.name}</Text>
                      
                  </Body>
                  <Right>
                      <Icon name="arrow-forward"  />
                  </Right>
                </ListItem>
                ))
              }
              <ListItem itemDivider>
                <Text>Asia</Text>
              </ListItem>
              { 
              this.state.locationsAsia.map((item, key) => (
                <ListItem key={key} onPress={() => {
                  /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Details', {
                        itemName: item.name,
                        itemImageLink: item.imageLink,
                        itemAddress: item.address,
                        itemOpeningHours: item.openFromTo,
                        itemLatitude: item.latitude,
                        itemLongitude: item.longitude,
                        itemTitle: item.title,
                        screen: this.state.Screen
                    });
                  }}>
                  <Left>
                      <Thumbnail square source={{ uri: item.imageLink }} />
                  </Left>
                  <Body>
                      
                      <Text>{item.name}</Text>
                      
                  </Body>
                  <Right>
                    <Icon name="arrow-forward"  />
                  </Right>
                </ListItem>
                ))
              } 
              <ListItem itemDivider>
                <Text>America</Text>
              </ListItem>
              { 
              this.state.locationsAmerica.map((item, key) => (
                <ListItem key={key} onPress={() => {
                  /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Details', {
                        itemName: item.name,
                        itemImageLink: item.imageLink,
                        itemAddress: item.address,
                        itemOpeningHours: item.openFromTo,
                        itemLatitude: item.latitude,
                        itemLongitude: item.longitude,
                        itemTitle: item.title,
                        screen: this.state.Screen
                    });
                  }}>
                  <Left>
                      <Thumbnail square source={{ uri: item.imageLink }} />
                  </Left>
                  <Body>
                      
                      <Text>{item.name}</Text>
                      
                  </Body>
                  <Right>
                      <Icon name="arrow-forward"  />
                  </Right>
                </ListItem>
                ))
              }
              <ListItem itemDivider>
                <Text>Africa</Text>
              </ListItem>
              { 
              this.state.locationsAfrica.map((item, key) => (
                <ListItem key={key} onPress={() => {
                  /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Details', {
                        itemName: item.name,
                        itemImageLink: item.imageLink,
                        itemAddress: item.address,
                        itemOpeningHours: item.openFromTo,
                        itemLatitude: item.latitude,
                        itemLongitude: item.longitude,
                        itemTitle: item.title,
                        screen: this.state.Screen
                    });
                  }}>
                  <Left>
                      <Thumbnail square source={{ uri: item.imageLink }} />
                  </Left>
                  <Body>
                      
                      <Text>{item.name}</Text>
                      
                  </Body>
                  <Right>
                      <Icon name="arrow-forward"  />
                  </Right>
                </ListItem>
                ))
              }
              <ListItem itemDivider>
                <Text>Oceania</Text>
              </ListItem>
              { 
              this.state.locationsOceania.map((item, key) => (
                <ListItem key={key} onPress={() => {
                  /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Details', {
                        itemName: item.name,
                        itemImageLink: item.imageLink,
                        itemAddress: item.address,
                        itemOpeningHours: item.openFromTo,
                        itemLatitude: item.latitude,
                        itemLongitude: item.longitude,
                        itemTitle: item.title,
                        screen: this.state.Screen
                    });
                  }}>
                  <Left>
                      <Thumbnail square source={{ uri: item.imageLink }} />
                  </Left>
                  <Body>
                      
                      <Text>{item.name}</Text>
                      
                  </Body>
                  <Right>
                      <Icon name="arrow-forward"  />
                  </Right>
                </ListItem>
                ))
              }
            </List>
          </Content>
        </Container>
      );
    }
  }
}
