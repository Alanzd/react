import React, { useEffect, useState } from 'react';
import { SaveInStorage } from '../helpers/SaveinStorage';
import { Edit } from './Edit';


// dentro del componente listado tengo que recibir las props que me llegan de App.js

export const List = ({listState, setListState}) => {

  //se ponen primero los estados y despues los hooks (useEffect, useState)

  // ejecuto useEffect, es el primer metodo que se ejecuta cuando cargo un componente, el array vacio induca que se ejecuta solo 1 vez
  useEffect(()=> {
    getMovies()
  }, [])

  const [edit, setEdit] = useState(false)


  // const [listState, setListState] = useState([]); lo vamos a llevar a App.js

  const getMovies = () => {
    let savedMovies = JSON.parse(localStorage.getItem('movies'));
    setListState(savedMovies);  
    return savedMovies
  }



  const deleteMovie = (id) => {
    // conseguir pelis almacenadas

    let saved_movies = getMovies()

    // filtrar para eliminar la que no quiero

    let final_movies = saved_movies.filter(movie => movie.id !== parseInt(id));

    // actualizar el estado del listState
    setListState(final_movies);

    // actualizar datos en localStorage

    localStorage.setItem('movies', JSON.stringify(final_movies))
  }

  

  return (
    <>
    {listState != null ?
    
      listState.map(movie => {

        return(
          <article key={movie.id} className="peli-item">
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>
            <button className="edit" onClick={() => setEdit(movie.id)}>Editar</button>
            <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>

            {/* aparece un form para aceptar  */}
            {edit == movie.id && 
            (
              <Edit movie={movie}
              getMovies= {getMovies}/>
              )
            }
          </article>
        )
      }) 
    
    : <h1>No hay pelis</h1>} 
    
    </>
  )
}
