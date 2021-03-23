import { useState, useEffect } from 'react';
import database from '../../service/firebase.js'

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../components/PokemonCard/pokemoncart.js';

import style from './style.module.css';


const GamePage = ({ onChangePage }) => {
    const [pokemons, setPokemons] = useState({});
    
    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, []);

    database.ref('pokemons').once('value', (snapshot) => {
        console.log(snapshot.val());
    });

    const getIdCart = (pokemon_id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === pokemon_id) {
                    database.ref('pokemons/'+ item[0]).set({
                        ...pokemon,
                        active: !pokemon.active
                    });
                    pokemon.active = !pokemon.active;
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }

    const addPokemonsDB = () => {
        setPokemons(prevState => {
                const data = Object.values(pokemons)[0];

                const newKey = database.ref().child('pokemons').push().key;
                database.ref('pokemons/' + newKey).set({
                    ...data
                });
        });
    }

    return(
        <Layout
            id="cards"
            title="Title"
            colorBg="#fafafa"
            colorBg="#202736"
            addPokemon={addPokemonsDB} 
        >
            <div className={style.flex}>
                {
                    Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) => (
                        <PokemonCard 
                            key={key}
                            name={name}
                            img={img}
                            values={values}
                            id={id}
                            type={type}
                            active={active}
                            onChangeCart={getIdCart} 
                        />
                    ))

                }
            </div>
        
            </Layout>
    );
};

export default GamePage;
