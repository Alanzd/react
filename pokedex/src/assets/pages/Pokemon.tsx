import React from 'react'
import { useParams } from 'react-router'


export const Pokemon = () => {

const {name} = useParams  
return (
    <div>{name}</div>
  )
}
