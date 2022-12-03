import React from 'react'
import {Card} from "antd";
import Meta from "antd/lib/card/Meta"
import { StarOutlined } from '@ant-design/icons';
import "../styles/PokemonCard.scss"



const PokemonCard = ({name, img}) => {
  return (
    <Card
    className='Pokemon-Card'
    title={name}
    cover={<img src={img} alt='charizard'/>}
    extra={<StarOutlined/>}
    >
        <Meta description="Fire, Flying" />
    </Card>
  )
}

export default PokemonCard