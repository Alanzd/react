import React, { useState } from 'react'
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import styles from "./pokemons.module.css";

import BulbasaurPic from '../images/bulbasaur.gif'


export const Pokemons = () => {

  const [query, setQuery] = useState ("")
  return (
    <>
      <Header query={query} setQuery={setQuery}/>
      <main>
        <nav>
          <Link className={styles.listItem} to='/'>
          <img className={styles.listItemIcon} src={BulbasaurPic} alt="" />
          <div className={styles.listItemText}>
            <span>Bulbasaur</span>
            <span>001</span>
          </div>
          </Link>
        </nav>
        <h1>Pokemons</h1>
      </main>
      <Footer />
      
    </>
  )
}

