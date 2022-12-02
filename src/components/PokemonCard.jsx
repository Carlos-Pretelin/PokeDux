import React from 'react'
import {Card} from "antd";
import Meta from "antd/lib/card/Meta"
import { StarOutlined } from '@ant-design/icons';
import "../styles/PokemonCard.scss"



const PokemonCard = () => {
  return (
    <Card
    className='Pokemon-Card'
    title="Charizard"
    cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' alt='charizard'/>}
    extra={<StarOutlined/>}
    >
        <Meta description="Fire, Flying" />
    </Card>
  )
}

export default PokemonCard