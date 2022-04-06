import axios from "axios";

//consts   or state
const dataInicial = {
    array: [],
    offset: 0
}

const GET_POKEMONS_SUCCESSFUL = 'GET_POKEMONS_SUCCESSFUL';
const GET_NEXT_POKEMONS_SUCCESSFUL = 'GET_NEXT_POKEMONS_SUCCESSFUL';

//reducers
export default function pokeReducer(state = dataInicial, action){

    console.log('action', action);
    // console.log(action.payload);
    switch(action.type){
        case GET_POKEMONS_SUCCESSFUL: 
            return {...state, array: action.payload, offset: 0};
        case GET_NEXT_POKEMONS_SUCCESSFUL: 
            return {...state, array: action.payload, offset: action.payload.offset};
        default: 
            return state;
    }
}

//actions
export const getPokemonsAction = () => async (dispatch, getState) => {
    try{
        const res =  await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
        dispatch({
            type: GET_POKEMONS_SUCCESSFUL,
            payload: res.data.results
        });
    } catch(error){
        console.log('error', error);
    }
}


export const getNextPokemonsAction = (num) => async (dispatch, getState) => {

    const {offset} = getState().pokemones;
    const next = offset + num;
    
    try{
        const res =  await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=20`);
        dispatch({
            type: GET_NEXT_POKEMONS_SUCCESSFUL,
            payload: res.data.results,
            offset: next
        });
    } catch(error){
        console.log('error', error);
    }
}
