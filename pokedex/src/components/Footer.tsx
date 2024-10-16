import React from 'react'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'
import PokemonPic from '../assets/images/pikachu.png';
import LocationPic from '../assets/images/pokeball.png';
import ItemPic from '../assets/images/location.png';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
    <Link to="/pokemons" className='footerLink'>
      <img className='footerIcon' src={PokemonPic} alt="pokeball" />
      Pokemons
    </Link>
    <Link className='footerLink' to="/pokemons">
      <img className='footerIcon' src={LocationPic} alt="pokeball" />
      Items
    </Link>
    <Link className='footerLink' to="/pokemons">
      <img className='footerIcon' src={ItemPic} alt="pokeball" />
      Map
    </Link>
  </footer>
  )
}

