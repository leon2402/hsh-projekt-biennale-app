import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, List, ListItem} from 'native-base';
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
      locations: []
    };
  }
  onCollectionUpdate = (querySnapshot) => {
    const locations = [];
    querySnapshot.forEach((doc) => {
      const { name } = doc.data();
      locations.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
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
        <Content>
        <List>
          { 
            this.state.locations.map((item, key) => (
              <ListItem>
                <Text>{item.name}</Text>
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

const style = StyleSheet.create({
  map:{
    flex: 1,
  }
});
