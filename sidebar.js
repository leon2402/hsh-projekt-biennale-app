import React from "react";
import { Image} from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Map", "LocationList", "Impressum"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={require('./assets/icon.jpg')} 
            style={{
                flex:1,
                height:200,
                width:280,
                
            }}>
            
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
