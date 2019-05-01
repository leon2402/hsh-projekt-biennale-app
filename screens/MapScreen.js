import React from 'react';
import { MapView, Location, Permissions } from 'expo';
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
      const { name, latitude, longitude, description, imageLink, address, openFromTo } = doc.data();
      locations.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        latitude,
        longitude,
        description,
        imageLink,
        address, 
        openFromTo
      });
    });
    this.setState({
      locations,
      isLoading: false,
   });
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    this.getLocationAsync();
  }
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

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
        showsUserLocation
        >
        {this.state.locations.map((marker, index) => (
          <MapView.Marker
            coordinate={{
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude)}}
              title={marker.name}
              
              key={index}
              onCalloutPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Details', {
                    itemName: marker.name,
                    itemImageLink: marker.imageLink,
                    itemAddress: marker.address,
                    itemOpeningHours: marker.openFromTo,
                    screen: 'Map'
                });
            }}

          />
        ))} 
        </MapView>
      </Container>
    );
    }
  }
}
