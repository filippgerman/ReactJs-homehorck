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
class Firebase{
    constructor() {

        
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val())
        })
    }

    offPokemonSoket = () => {
        this.database.ref('pokemons').off();
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (data) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data);
    }
}

export default Firebase;
