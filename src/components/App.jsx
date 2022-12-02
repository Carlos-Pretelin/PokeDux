import React, { useEffect,  } from 'react'
import SearchBar from './SearchBar'
import {Col} from "antd";
import "../styles/App.scss"
import PokemonList from './PokemonList'
import logo from "../statics/logo.svg"
import getPokemon from '../api';
import { setPokemon  } from '../actions';
import { useDispatch, useSelector } from 'react-redux';


const App = () => {
  

  const pokemon = useSelector(state => state.pokemon)
  const dispatch = useDispatch();

  //console.log(pokemon)
  useEffect( ()=>{
    const fetchPokemon = async () =>{
    const pokeResponse =  await getPokemon();
    dispatch(setPokemon(pokeResponse))
    
    }

    fetchPokemon();

  }, [])


  return (
    <div className='App'>
        <Col span={4} offset={10}>
            <img className='App-Logo' src={logo} alt="Pokedux"/>
        </Col>
        <Col span={8} offset={8}>
             <SearchBar/>
        </Col>
        <PokemonList Pokemon={pokemon}/>
        
    </div>
  )
}




export default App;