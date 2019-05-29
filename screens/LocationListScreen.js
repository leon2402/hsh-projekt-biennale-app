import React from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, List, ListItem, Thumbnail, Spinner } from 'native-base';
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
        showEurope: false,
        showAsia: false,
        showAmerica: false,
        showOceania: false,
        showAfrica:true,
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
          <Header />
          <Content>
            <Spinner color='blue' />
              <Right><Text>Loading...</Text></Right>
          </Content>
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
            <ListItem itemDivider onPress={() => { 
                                    this.setState(prevState => 
                                                  ({showAfrica: !prevState.showAfrica}));}}>
                <Left>
                  <Text>Africa</Text>
                </Left>
                <Right>
                  {
                    this.state.showAfrica
                      ?<Icon name="arrow-up"  />
                      :<Icon name="arrow-down"  />
                  }
                </Right>
              </ListItem>
              { 
              this.state.showAfrica
                ?this.state.locationsAfrica.map((item, key) => (
                  <ListItem thumbnail key={key} onPress={() => {
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
                        <Thumbnail source={{ uri: item.imageLink }} />
                    </Left>
                    <Body>
                        
                        <Text>{item.name}</Text>
                        
                    </Body>
                    <Right>
                        <Icon name="arrow-forward"  />
                    </Right>
                  </ListItem>
                  ))
                  :<Text></Text>
              }
              <ListItem itemDivider onPress={() => { 
                                    this.setState(prevState => 
                                                  ({showAmerica: !prevState.showAmerica}));}}>
                <Left>
                  <Text>America</Text>
                </Left>
                <Right>
                  {
                    this.state.showAmerica
                      ?<Icon name="arrow-up"  />
                      :<Icon name="arrow-down"  />
                  }
                </Right>
              </ListItem>
              { 
              this.state.showAmerica
                ?this.state.locationsAmerica.map((item, key) => (
                  <ListItem thumbnail key={key} onPress={() => {
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
                        <Thumbnail source={{ uri: item.imageLink }} />
                    </Left>
                    <Body>
                        
                        <Text>{item.name}</Text>
                        
                    </Body>
                    <Right>
                        <Icon name="arrow-forward"  />
                    </Right>
                  </ListItem>
                  ))
                :<Text></Text>
              }
              <ListItem itemDivider onPress={() => { 
                                    this.setState(prevState => 
                                                  ({showAsia: !prevState.showAsia}));}}>
                <Left>
                  <Text>Asia</Text>
                </Left>
                <Right>
                  {
                    this.state.showAsia
                      ?<Icon name="arrow-up"  />
                      :<Icon name="arrow-down"  />
                  }
                </Right>
              </ListItem>
              {
              this.state.showAsia
                ?this.state.locationsAsia.map((item, key) => (
                  <ListItem thumbnail key={key} onPress={() => {
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
                        <Thumbnail source={{ uri: item.imageLink }} />
                    </Left>
                    <Body>
                        
                        <Text>{item.name}</Text>
                        
                    </Body>
                    <Right>
                      <Icon name="arrow-forward"  />
                    </Right>
                  </ListItem>
                  ))
                  :<Text></Text>
              } 
              <ListItem itemDivider onPress={() => { 
                                    this.setState(prevState => 
                                                  ({showEurope: !prevState.showEurope}));}}>
                <Left>
                  <Text>Europe</Text>
                </Left>
                <Right>
                  {
                    this.state.showEurope
                      ?<Icon name="arrow-up"  />
                      :<Icon name="arrow-down"  />
                  }
                </Right>
              </ListItem>
              { 
              this.state.showEurope
                ?this.state.locationsEurope.map((item, key) => (
                  <ListItem thumbnail key={key} onPress={() => {
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
                        <Thumbnail source={{ uri: item.imageLink }} />
                    </Left>
                    <Body>
                        
                        <Text>{item.name}</Text>
                        
                    </Body>
                    <Right>
                        <Icon name="arrow-forward"  />
                    </Right>
                  </ListItem>
                  ))
                  :<Text></Text>
              }
              <ListItem itemDivider onPress={() => { 
                                    this.setState(prevState => 
                                                  ({showOceania: !prevState.showOceania}));}}>
                <Left>
                  <Text>Oceania</Text>
                </Left>
                <Right>
                  {
                    this.state.showOceania
                      ?<Icon name="arrow-up"  />
                      :<Icon name="arrow-down"  />
                  }
                </Right>
              </ListItem>
              { 
              this.state.showOceania
                ?this.state.locationsOceania.map((item, key) => (
                  <ListItem thumbnail key={key} onPress={() => {
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
                        <Thumbnail source={{ uri: item.imageLink }} />
                    </Left>
                    <Body>
                        
                        <Text>{item.name}</Text>
                        
                    </Body>
                    <Right>
                        <Icon name="arrow-forward"  />
                    </Right>
                  </ListItem>
                  ))
                  :<Text></Text>
              }
            </List>
          </Content>
        </Container>
      );
    }
  }
}
