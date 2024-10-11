import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveinStorage';
// dentro del comp create tengo que recibir las props desde App.js:
export const Create = ({setListState}) => {

  const title_comp= 'Add movie';

  const [movieState, setMovieState] = useState({
    title:'',
    description:''
  })

  const getFormData = e => {
 
    e.preventDefault();

    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    // crear objeto de la pelicula a guardar

    let movie = {
      id: new Date().getTime(),
      title,
      description
    }
    // guardo el estado 
    setMovieState(movie)

    // a la vez que guardo en el storage tambien cargo setListState que recarga la pagina
    // agrego a los elementos que ya habia un nuevo elem

    setListState(elements => {
      return [...(elements || []), movie];
    });

    // guardo en localstorage
    SaveInStorage('movies', movie);

  }

  return (

    <div className="edit">
      <h3 className="title">{title_comp}</h3> 
      <form onSubmit={getFormData}>
        <input 
          type="text" 
          id="title"
          name = 'title'          
          placeholder="Titulo" />
        <textarea 
          id="description"
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
