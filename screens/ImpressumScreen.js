import React from 'react';
import { Image, StyleSheet } from 'react-native';
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
            <Title>Header</Title>
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
                <Image source={{uri: 'http://kilianmodl.wp.hs-hannover.de/images/hshannover.jpg'}} style={{height: 200, width: null, flex: 1}} /> 
            </CardItem>
          </Card>

          <Card>
         </Card>
         <Card>
            <CardItem header>
              <Text>{`
                Angaben gemäß § 5 TMG:

                Prof. Dr. Thomas J. Schult
                Hochschule Hannover
                Expo Plaza 12
                Fakultät III
                30539 Hannover

                Kontakt:

                Telefon: +49 511 9296 2658
                E-Mail: thomas.schult@hs-hannover.de
                `}</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Text>{`
              
Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
Prof. Dr. Thomas J. Schult
Hochschule Hannover Fakultät III
Expo Plaza 12
30539 Hannover
Deutschland

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`}</Text>

<Text>{` `}</Text>

<Text style={{fontWeight: 'bold'}}> Haftung für Inhalte </Text>

<Text>{`
Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
forschen, die auf eine rechtswidrige Tätigkeit hinweisen.

Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
`}</Text>

<Text>{` `}</Text>

<Text style={{fontWeight: 'bold'}}> Haftung für Links </Text>

<Text>{`
Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
waren zum Zeitpunkt der Verlinkung nicht erkennbar.Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
umgehend entfernen.
`}</Text>

<Text>{` `}</Text>

<Text style={{fontWeight: 'bold'}}> Urheberrecht </Text>

<Text>{`
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              `}</Text>

              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Quelle:</Text>
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
  bigBlue: {
    color: 'blue',
    fontSize: 30,
  },
});