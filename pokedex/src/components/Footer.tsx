import React from 'react'
import { Link } from 'react-router-dom'
import PokemonPic from '../assets/images/pikachu.png';
import LocationPic from '../assets/images/pokeball.png';
import ItemPic from '../assets/images/location.png';

export const Footer = () => {
  return (
    <footer>
    <Link to="/pokemons">
      <img src={PokemonPic} alt="pokeball" />
      Pokemons
    </Link>
    <Link to="/pokemons">
      <img src={LocationPic} alt="pokeball" />
      Items
    </Link>
    <Link to="/pokemons">
      <img src={ItemPic} alt="pokeball" />
      Map
    </Link>
  </footer>
  )
}

