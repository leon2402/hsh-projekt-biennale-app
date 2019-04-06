import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, List, ListItem, Thumbnail, Item, Input } from 'native-base';
import firebase from '../firebase';

export default class LocationListScreen extends React.Component {

static navigationOptions = ({ navigation }) => {
    
    const params = navigation.state.params || {};
  
    drawerLabel: 'Location List '
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
            <ListItem thumbnail style={{borderBottom: 'black'}}>
                <Left>
                    <Thumbnail square source={{ uri: 'http://graftlab.com/wp-content/uploads/2018/05/GRAFT_UnbuildingWalls_cJanBitterGRAFT_FI700x475.jpg' }} />
                </Left>
                <Body>
                    <Text>German Pavilion</Text>
                </Body>
                <Right>
                <Icon name="arrow-forward"  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Details', {
                    //itemId: 86,
                    // otherParam: 'First Details',
                    });
                }}/>
                </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://graftlab.com/wp-content/uploads/2018/05/GRAFT_UnbuildingWalls_cJanBitterGRAFT_FI700x475.jpg' }} />
              </Left>
              <Body>
                <Text>French Pavilion</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" onPress={() => this.test()}/>
              </Right>
            </ListItem>
            
            <ListItem itemDivider>
              <Text>Asia</Text>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://graftlab.com/wp-content/uploads/2018/05/GRAFT_UnbuildingWalls_cJanBitterGRAFT_FI700x475.jpg' }} />
              </Left>
              <Body>
                <Text>Chinese Pavilion</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            { 
            this.state.locations.map((item, key) => (
              <ListItem>
                <Left>
                    <Thumbnail square source={{ uri: 'http://graftlab.com/wp-content/uploads/2018/05/GRAFT_UnbuildingWalls_cJanBitterGRAFT_FI700x475.jpg' }} />
                </Left>
                <Body>
                    
                    <Text>{item.name}</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward"  onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemName: item.name,
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