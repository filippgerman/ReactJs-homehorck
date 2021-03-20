import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBhXjK0cDa3Pv9Wc7GabNrbif3Ush8a8-0",
  authDomain: "pokemons-72054.firebaseapp.com",
  databaseURL: "https://pokemons-72054-default-rtdb.firebaseio.com",
  projectId: "pokemons-72054",
  storageBucket: "pokemons-72054.appspot.com",
  messagingSenderId: "557511631508",
  appId: "1:557511631508:web:2eff67c796304841c44a81"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
