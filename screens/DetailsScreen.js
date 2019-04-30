import React from 'react';
import { Alert, StyleSheet, Image } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, List, ListItem, Thumbnail, Item, Input } from 'native-base';

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
                style={{width: 400, height: 400}} 
                    />
            <List>
            <ListItem>
            <Text>Name: </Text>
            <Text>{this.props.navigation.state.params.itemName}</Text>
            </ListItem>
            <ListItem>
            <Text>Address: </Text>
            <Text>{this.props.navigation.state.params.itemAddress} </Text>
            </ListItem>
            <ListItem>
            <Text>Opening Hours: </Text>
            <Text>{this.props.navigation.state.params.itemOpeningHours} </Text>
            </ListItem>
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