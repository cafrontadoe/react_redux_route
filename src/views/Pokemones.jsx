import React, { Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemonsAction, getNextPokemonsAction } from '../redux/pokeDucks';

// let indexList = 0;

const Pokemones = () => {

    const dispatch = useDispatch();
    const pokemonesList = useSelector(store => store.pokemones.array);
    console.log(pokemonesList);

    // let constcallPokemonListFromStore = () =>{
    //     indexList += 20;
    //     dispatch(getPokemonsAction(indexList))
    // }

    return ( 
        <Fragment>
            <h1>Lista de pokemones</h1>
            <button onClick={() => dispatch(getPokemonsAction())}>Get pokemones</button>
                <button onClick={()=> dispatch(getNextPokemonsAction(20)) }>next Page</button>
            <ul>
                {
                    pokemonesList.map(pokemon => 
                        <li key={pokemon.name}>
                            {pokemon.name} - {pokemon.url}
                        </li>
                        )
                    }
            </ul>
        </Fragment>
     );
}
 
export default Pokemones;