import React from 'react';
import { MapView } from 'expo';
import { Alert, StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text } from 'native-base';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Map '
  };
state={
    longitude: 10.327924,
    latitude: 45.435768,
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
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 45.435768,
          longitude: 12.327924,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
        <MapView.Marker
        coordinate={{
            latitude: this.state.latitude,
            longitude: this.state.longitude}}
        />
        </MapView>

      </Container>
    );
  }
}