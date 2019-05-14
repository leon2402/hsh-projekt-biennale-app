import React from 'react';
import { Image, StyleSheet, Linking } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, Card, CardItem, Thumbnail, H1, H2 } from 'native-base';

export default class ImpressumScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Impressum '
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
            <Title>Impressum</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
         </Card>
         <Card>
         <CardItem header>
              <H1>Impressum</H1>

            </CardItem>
            <CardItem cardBody> 
                <Image source={{uri: 'http://biennale-app.wp.hs-hannover.de/biennale_images/hshannover.jpg'}} style={{height: 200, width: null, flex: 1}} /> 
            </CardItem>
          </Card>

          <Card>
         </Card>
         <Card>
            <CardItem header>
              <Text>{`
Information according to § 5 TMG:

Prof. Dr. Thomas J. Schult
Hanover University
Expo Plaza 12
Faculty III
30539 Hanover

Contact:

Phone: +49 511 9296 2658
E-Mail: thomasj.schult@hs-hannover.de
                `}</Text>
            </CardItem>
            <CardItem>
              <Body>
			  <Text style={{fontWeight: 'bold'}}>Responsible for the content according to § 55 Abs. 2 RStV: </Text>
              <Text>{` 
Prof. Dr. Thomas J. Schult
Hannover University of Applied Sciences Faculty III
Expo Plaza 12
30539 Hanover
Germany 

We are not willing or obliged to participate in dispute resolution proceedings before a consumer mediation body.
				`}</Text>

<Text>{` `}</Text>

<Text style={{fontWeight: 'bold'}}>Liability for content </Text>

<Text>{`
As a service provider we are responsible according to § 7 Abs.1 TMG for our own contents on these pages according to the general laws. 
According to §§ 8 to 10 TMG, we are not obliged as a service provider to monitor transmitted or stored third-party information or, under certain circumstances, to that indicate illegal activity obligations to remove or block the use of information in accordance with general laws remain unaffected by this. 
Any liability in this regard, however, is only possible from the time of knowledge of a concrete violation of the law.
As soon as we become aware of such infringements, we will remove the content immediately.
`}</Text>

<Text>{` `}</Text>

<Text style={{fontWeight: 'bold'}}>Liability for links </Text>

<Text>{`
Our offer contains links to external websites of third parties on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. For the contents of the respective provider or operator of the pages is always responsible for the content of linked pages. 
The linked pages were checked for possible violations of the law at the time of linking. Illegal contents however, a permanent control of the contents of the linked pages is not possible without concrete clues of an illegal content violation of rights unreasonable. 
If we become aware of any violations of the law, we will remove such links from our website immediately.
`}</Text>

<Text>{` `}</Text>

<Text style={{fontWeight: 'bold'}}>Copyright </Text>

<Text>{`
The content and work on these pages created by the site operators are subject to German copyright law. The duplication, processing, distribution and any kind of use outside of the copyright law are not permitted without the author's agreement.
Limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use as far as the content on this site was not created by the operator, the copyrights of third parties are respected. 
In particular, contents of third parties are marked as such. If you become aware of any infringement of copyright, please inform us accordingly. As soon as we become aware of any infringements, we will remove such content immediately.
              `}</Text>

              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Source: </Text>
              <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.e-recht24.de/impressum-generator.html')}>
  e-recht24
</Text>
            </CardItem>
         </Card>
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