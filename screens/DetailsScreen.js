import React from 'react';
import {  StyleSheet, Image } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, List, ListItem, Thumbnail, Item, Input } from 'native-base';
import { showLocation } from 'react-native-map-link'

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel:()=>null, 
  };
  render() {
    const goBack = this.props.navigation.state.params.screen
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate(goBack, {
                            
                        });
                    }}/> 
            </Button>
          </Left>
          <Body>
            <Title>{this.props.navigation.state.params.itemName}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <Image 
                source={{uri: this.props.navigation.state.params.itemImageLink}} 
                style={{flex:1, height: 400}} 
                    />
            <List>
                <ListItem itemDivider>
              <Text>Name:</Text>
            </ListItem>
              <ListItem>
                <Text>{this.props.navigation.state.params.itemName}</Text>
              </ListItem>
                <ListItem itemDivider>
                <Text>Title: </Text>
            </ListItem>
              <ListItem>
                
                <Text>{this.props.navigation.state.params.itemTitle }</Text>
              </ListItem>
                <ListItem itemDivider>
                <Text>Address: </Text>
            </ListItem>
              <ListItem>
                <Text>{this.props.navigation.state.params.itemAddress} </Text>
              </ListItem>
                <ListItem itemDivider>
                <Text>Opening Hours: </Text>
            </ListItem>
              <ListItem>
                <Text>{this.props.navigation.state.params.itemOpeningHours} </Text>
              </ListItem>
              <ListItem>
                <Button onPress={() => { showLocation({
                                          latitude: (this.props.navigation.state.params.itemLatitude),
                                          longitude: (this.props.navigation.state.params.itemLongitude),
                                          title: (this.props.navigation.state.params.itemName),
                                          googleForceLatLon: true,
                                          }) }} >
                  <Text>Navigate me to location</Text>
                </Button>
              </ListItem>
            </List>
        </Content>
      </Container>
    );
  }
}