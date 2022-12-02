import React from 'react'
import PokemonCard from './PokemonCard'
import "../styles/PokemonList.scss"

const PokemonList = ({Pokemon}) => {
  return (
    <div className='Pokemon-List'>
        {Pokemon.map( (item) => (
            <PokemonCard/>
        ))}
    </div>
  )
}

PokemonList.defaultProps = {
    Pokemon: Array(12).fill("")
}

export default PokemonList