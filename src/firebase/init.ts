import firebase from 'firebase';
import firestore from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDLp2Uj_5u0lDGtT1XzW0qdkEIZj0ytnt4',
  authDomain: 'digital-signage-test-3c588.firebaseapp.com',
  databaseURL: 'https://digital-signage-test-3c588.firebaseio.com',
  projectId: 'digital-signage-test-3c588',
  storageBucket: 'digital-signage-test-3c588.appspot.com',
  messagingSenderId: '745908747423',
  appId: '1:745908747423:web:19a4669896459af6',
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
