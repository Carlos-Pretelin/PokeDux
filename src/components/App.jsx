import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import {Col} from "antd";
import "../styles/App.scss"
import PokemonList from './PokemonList'
import logo from "../statics/logo.svg"
import getPokemon from '../api';
import { connect, Connect } from 'react-redux';
import { setPokemon as setPokemonActions } from '../actions';


const App = ({pokemon, setPokemon}) => {
  
  console.log(pokemon)
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

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemon: (value) => dispatch(setPokemonActions(value)),
});



export default connect(mapStateToProps, mapDispatchToProps)(App);