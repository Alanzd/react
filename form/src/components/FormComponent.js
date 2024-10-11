import React, { useState } from 'react'

export const FormComponent = () => {

  const [user, setUser] = useState({})

  const getFormData = e => {
    e.preventDefault();
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellidos: datos.apellidos.value,
      genero: datos.genero.value,
      bio: datos.bio.value
    }

    setUser(usuario)
    
  }

  const modifyUser = e => {
    let input_name = e.target.name;
    let input_value = e.target.value;
    let user_to_modify = user
    
    user_to_modify[input_name] = input_value;
    console.log(user_to_modify)
  }

  return (
    <div>
      <h1>FormComponent</h1>
      {user.nombre && user.nombre.length > 0 && 
        (<div className='infoUser label label-grey'>
        <h1>{user.nombre} {user.apellidos}  es {user.genero} y su biografía es: {user.bio}</h1> 
        </div>)
      }
      <form onSubmit={getFormData}>
        <input type='text' placeholder='Nombre' name='nombre' onChange={modifyUser}></input>
        <input type='text' placeholder='Apellidos' name='apellidos' onChange={modifyUser}></input>
        <select name='genero' onChange={modifyUser}>
          <option value='mujer'>Mujer</option>
          <option value='hombre'>Hombre</option>
        </select>
        <textarea placeholder='biografia' defaultValue='' name='bio' onChange={modifyUser}></textarea>
        <input type='submit' value='Enviar'/>
      </form>
    </div>
  )
}
