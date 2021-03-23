import { useState, useEffect, useContext } from 'react';
import database from '../../../../service/firebase.js'

import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css';
import {FireBaseContext} from '../../../../context/firebaseContext';


const StartPage = ({ onChangePage }) => {
    const firebase = useContext(FireBaseContext);
    const [pokemons, setPokemons] = useState({});
    
    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons);
        });
        return () => firebase.offPokemonSoket();
    }, []);

    const handleChangeSelected = (key) => {
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))
    }

    return(
        <Layout
            id="cards"
            title="Title"
            colorBg="#fafafa"
            colorBg="#202736" 
        >
            <div className={s.buttonWrap}>
                <button>
                    Start Game
                </button>
            </div>
            <div className={s.flex}>

                {
                    Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) => (
                        <PokemonCard 
                            className={s.card}
                            key={key}
                            name={name}
                            img={img}
                            values={values}
                            id={id}
                            type={type}
                            isActive={true}
                            isSelected={selected}
                            onChangeCart={() => handleChangeSelected(key)} 
                        />
                    ))

                }
            </div>
        
            </Layout>
    );
};

export default StartPage;
