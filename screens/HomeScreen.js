import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text } from 'native-base';

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
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button onPress={() => { Alert.alert('You tapped the button!');}} danger >
            <Text>Klick mich!</Text>
          </Button>
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