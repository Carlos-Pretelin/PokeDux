import React from 'react'
import PokemonCard from './PokemonCard'
import "../styles/PokemonList.scss"

const PokemonList = ({Pokemon}) => {
    console.log(Pokemon)
  return (
    <div className='Pokemon-List'>
        {Pokemon.map( (item) => (
            <PokemonCard name={item.name} key={item.name}/>
        ))}
    </div>
  )
}

PokemonList.defaultProps = {
    Pokemon: Array(12).fill("")
}

export default PokemonList