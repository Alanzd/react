import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css'

const Search = () => {
  const fasearch = <FontAwesomeIcon icon={faSearch} />
  return (
    <>
      <h3 className='title'>Mas de 800 pokemones, elige tu favorito</h3>
      <section className='search-container'>
        <input type='text' placeholder='busqueda' className='search-input'/>
        <button className='btn-search'>
        <span>{fasearch}</span>
          Buscar
        </button>
      </section>
    </>

  )
}

export default Search