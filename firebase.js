import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCcyPu-oonYAiw25A2bWg-0qPm9THqTybE",
    authDomain: "hsh-projekt-biennale-app.firebaseapp.com",
    databaseURL: "https://hsh-projekt-biennale-app.firebaseio.com",
    projectId: "hsh-projekt-biennale-app",
    storageBucket: "hsh-projekt-biennale-app.appspot.com",
    messagingSenderId: "683665338144"
};
firebase.initializeApp(config);


export default firebase;