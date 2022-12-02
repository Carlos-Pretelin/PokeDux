import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import {Col} from "antd";
import "../styles/App.scss"
import PokemonList from './PokemonList'
import logo from "../statics/logo.svg"
import getPokemon from '../api';


const App = () => {
  const [pokemon, setPokemon] = useState([])

  useEffect( ()=>{
    const fetchPokemon = async () =>{
    const pokeResponse =  await getPokemon();
    setPokemon(pokeResponse);
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

export default App