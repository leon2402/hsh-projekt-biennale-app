import React from 'react';
import { MapView } from 'expo';
import { Alert, StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text } from 'native-base';
import firebase from '../firebase';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Map '
  };
  constructor() {
    super();
    this.ref = firebase.firestore().collection('locations');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      locations: [],
      latitude: 45.430888,
      longitude: 12.328734
    };
  }
  onCollectionUpdate = (querySnapshot) => {
    const locations = [];
    querySnapshot.forEach((doc) => {
      const { name, latitude, longitude } = doc.data();
      locations.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        latitude,
        longitude,
      });
    });
    this.setState({
      locations,
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
        {this.state.locations.map((marker, index) => (
          <MapView.Marker
            coordinate={{
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude)}}
            title={marker.title}
            description={marker.description}
            key={index}
          />
        ))} 
        </MapView>
      </Container>
    );
  }
}
}