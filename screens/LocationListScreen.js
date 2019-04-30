import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, List, ListItem, Thumbnail, Item, Input } from 'native-base';
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
      const { name, continent, imageLink, address, openFromTo } = doc.data();
      locations.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        continent,
        imageLink,
        address, 
        openFromTo,
      });
    });
    const locationsEurope = locations.filter(item => item.continent == "europe")
    const locationsAsia = locations.filter(item => item.continent == "asia")
    this.setState({
      locations,
      locationsEurope,
        locationsAsia,
      isLoading: false,
   });
    
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
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
            <Item>           
            <Icon name="ios-search" style={{padding: 10}}/>            
            <Input placeholder="Search" />
            <Button transparent>
            <Text>Go!</Text>
          </Button>
          </Item>
          
          <List>
            <ListItem itemDivider>
              <Text>Europe</Text>
            </ListItem>
             { 
            this.state.locationsEurope.map((item, key) => (
              <ListItem key={key}>
                <Left>
                    <Thumbnail square source={{ uri: item.imageLink }} />
                </Left>
                <Body>
                    
                    <Text>{item.name}</Text>
                    
                </Body>
                <Right>
                    <Icon name="arrow-forward"  onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemName: item.name,
                            itemImageLink: item.imageLink,
                            itemAddress: item.address,
                            itemOpeningHours: item.openFromTo,
                            screen: this.state.Screen
                        });
                    }}/>
                </Right>
              </ListItem>
            ))
          }
           
            
            <ListItem itemDivider>
              <Text>Asia</Text>
            </ListItem>
            { 
            this.state.locationsAsia.map((item, key) => (
              <ListItem key={key}>
                <Left>
                    <Thumbnail square source={{ uri: item.imageLink }} />
                </Left>
                <Body>
                    
                    <Text>{item.name}</Text>
                    
                </Body>
                <Right>
                  <Icon name="arrow-forward"  onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemName: item.name,
                            itemImageLink: item.imageLink,
                            itemAddress: item.address,
                            itemOpeningHours: item.openFromTo,
                            screen: this.state.Screen
                        });
                    }}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});