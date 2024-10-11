import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

// recojo los params que me llegan de la url con useParams

  // const params = useParams();

  // uso la desestructuracion de objetos y asigno valores por defecto:
  // const {nombre="Ana", apellido="Lanz"} = useParams();

  // puedo hacerlo 
  const {nombre, apellido} = useParams();
  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    let nombre = e .target.nombre.value;
    let apellido = e .target.apellido.value;
    let url = `/persona/${nombre}/${apellido}`;

    nombre.length && apellido.length ? navegar(url) : navegar("/inicio")
  }

  // le puedo asignar valores por defecto pero la constante de nombre y apellidos debería ser let
  // nombre = nombre || "Ana";
  // apellido = apellido || "lanz"

  return (
    <div>
      {!nombre ? <h1>No hay persona que mostrar</h1> : <h1>Persona {nombre} {apellido}</h1>}


      <form onSubmit={enviar}>
        <input type='text' name='nombre'/>
        <input type='text' name='apellido'/>
        <input type='submit' name='enviar' value='enviar'/>
      </form>
    </div>
  )
}