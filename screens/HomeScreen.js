import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Icon, Button, Title, H1 } from "native-base";


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home '
  };
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
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
      <Content>
        <Card>
          <CardItem header>
              <H1>Map</H1>
          </CardItem>
          <CardItem button onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Map');
                    }} >
              <Image source={{uri: 'http://biennale-app.wp.hs-hannover.de/biennale_images/biennale_map_screen.PNG'}} style={{height: 200, width: null, flex: 1}} /> 
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
              <H1>Location List</H1>
          </CardItem>
          <CardItem button onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('LocationList');
                    }} >
              <Image source={{uri: 'http://biennale-app.wp.hs-hannover.de/biennale_images/biennale_locationlist_screen.PNG'}} style={{height: 200, width: null, flex: 1}} /> 
          </CardItem>
        </Card>
        <Card>
         <CardItem header>
            <H1>Impressum</H1>
          </CardItem>
          <CardItem cardbody button onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('Impressum');
                  }} >
              <Image source={{uri: 'http://biennale-app.wp.hs-hannover.de/biennale_images/hshannover.jpg'}} style={{height: 200, width: null, flex: 1}} /> 
          </CardItem>
        </Card>
      </Content>
    </Container>
    );
  }
}