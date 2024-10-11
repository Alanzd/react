import React from 'react'
import { SaveInStorage } from '../helpers/SaveinStorage';

export const Edit = ({movie, getMovies}) => {

  const title_comp = 'Edit movie';

  const updateMovie = (e, id) => {

    let target = e.target;

    // buscar el id del objeto nuevo a guardar en localStorage

    const savedMovies = getMovies();

    const newMovie = {
      id: id, 
      title: e.target.title.value,
      description: e.target.description.value
    }
    
    let newData = savedMovies.map(movie =>
      movie.id === id ? { ...movie, ...newMovie } : movie
    )

    // actualizo localStorage

    localStorage.setItem('movies', JSON.stringify(newData))


  }
  return (
    <div className='edit_form'>
      <h3 className='title'>{title_comp}</h3>   
      <form onSubmit={e => updateMovie(e, movie.id)}>
        <input 
          type="text" 
          id="title"
          name = 'title' 
          defaultValue={movie.title}
          placeholder="Titulo" />
        <textarea 
          id="description"
          defaultValue={movie.description}
          placeholder="Descripción">
        </textarea>
        <input 
          type="submit" 
          id="save" 
          value="Guardar" />
      </form>
    </div>
  )
}
