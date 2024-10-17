import React from 'react'
import { useParams } from 'react-router'
import fetchPokemons from '../../api/fetchPokemons'


export const Pokemon = () => {

const {name} = useParams  
return (
    <div>{name}</div>
  )
}
