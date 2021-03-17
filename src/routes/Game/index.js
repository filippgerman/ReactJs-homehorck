import Layout from '../../components/Layout';
import { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../components/PokemonCard/pokemoncart.js';
import style from './style.module.css';

const GamePage = ({ onChangePage }) => {
    const [pokemons, setPokemons] = useState(POKEMONS);
    const getIdCart = (id) => {
        setPokemons(prevState => {
          prevState.forEach(element => {
            if(element.id == id){
              element.isActive = !element.isActive;
              return;
            }

          });
          return [...prevState];
        })
    }
    return(
        <Layout
            id="cards"
            title="Title"
            colorBg="#fafafa"
            colorBg="#202736"
        >
            <div className={style.flex}>
                {
                    pokemons.map(item=> <PokemonCard key={item.id} 
                        onChangeCart={getIdCart} 
                        {...item}
                        />)

                }
            </div>
        
        </Layout>
    );
};

export default GamePage;
