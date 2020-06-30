import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDkljepRmG1pWai_HNVXCgL7P-jwJEh0gg',
  authDomain: 'crwn-db-89671.firebaseapp.com',
  databaseURL: 'https://crwn-db-89671.firebaseio.com',
  projectId: 'crwn-db-89671',
  storageBucket: 'crwn-db-89671.appspot.com',
  messagingSenderId: '52543838098',
  appId: '1:52543838098:web:4c97921729c02a70ddd34b',
  measurementId: 'G-5TZQLPHSBT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
