import React, { useState } from 'react'

export const Search = ({listState, setListState}) => {

  const [search, setSearch] = useState('')
  
  const searchMovie = (e) => {
    // crear estado y actualizarlo 
    setSearch(e.target.value)

    // filtrar para buscar coincidencias

    let finded_movies = (listState).filter(movie => 
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
    // actualizar estado del listado principal con lo que he filtrado

    if(finded_movies === 0){
      finded_movies = JSON.parse(localStorage.getItem('movies'));
    }
    setListState(finded_movies);

  }
  return (
    <div className="search">
      <h3 className="title">Buscador: {search}</h3>
      <form>
        <input 
          type="text" 
          id="search_field"
          name= "search"
          autoComplete='off'
          onChange={searchMovie}
        />
      </form>
    </div>
  )
}
