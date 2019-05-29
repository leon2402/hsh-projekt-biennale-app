import React from 'react';
import { Image, Linking  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Icon, Button, Title, H1} from "native-base";

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
        <Image 
                source={require('../assets/Venezia.png')} 
                style={{height: 300, width: null, justifyContent: 'center', alignItems: 'center', flex: 1}}
                    />
        <Text style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center',flex: 1, fontSize: 20, padding:20, margin: 10 }}> Welcome to the Biennale App! {"\n"} {"\n"}
            Find all the pavilions of the Biennale 2019. </Text>
        <Card>
          <CardItem header>
              <H1>Map</H1>
          </CardItem>
          <CardItem button onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Map');
                    }} >
              <Image source={{uri: 'http://biennale-app.wp.hs-hannover.de/biennale_images/biennale_map_screen.PNG'}} style={{height: 100, width: null, flex: 1}} /> 
          </CardItem>
        </Card>
        <CardItem footer>
          <Button style={{ backgroundColor: '#3B5998' }}       onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100035063024364')}>
                <Icon name="logo-facebook" />
          </Button>
            <Button style={{ backgroundColor: '#3B5998' }}       onPress={() => Linking.openURL('https://www.instagram.com/biennale_map_venice/')}>
                <Icon name="logo-instagram" />
          </Button>
        </CardItem>
        
      </Content>
    </Container>
    );
  }
}