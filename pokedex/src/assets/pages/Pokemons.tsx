import React, { useState } from 'react'
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';


export const Pokemons = () => {

  const [query, setQuery] = useState ("")
  return (
    <>
      <Header query={query} setQuery={setQuery}/>
      <main>
        <h1>Pokemons</h1>
      </main>
      <Footer />
      
    </>
  )
}
