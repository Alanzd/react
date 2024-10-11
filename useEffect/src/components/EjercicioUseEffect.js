import React, { useState, useEffect } from 'react'
import { AvisoComponent } from './AvisoComponent'

export const EjercicioUseEffect = () => {

  const [user, setUser] = useState("Ana")

  const modifyUser = e => {
    setUser(e.target.value)
  }
  
  const [fecha, setFecha] = useState("17-08-1981");

  const [contador, setContador] = useState(0)
  
  const cambiaFecha = e => {
    setFecha(Date.now())
  }
  
  // metodo con funcion anónima que se ejecuta cada vez que se carga el componente o cada vez que hay cualquier cambio
  // corchetes vacíos indica que solo se carga una vez
  
  useEffect(() => {
    console.log('has cargado el componente');
  }, []);
  
  // si le añado un segundo parametro le indico cuando quiero que se ejecute

  // se ejecuta con cualquier cambio de user
  useEffect(() => {
    setContador(contador+1)
    console.log("has modificado el user " + contador);
  }, [user]);

  // se ejecuta con cualquier cambio de fecha
  useEffect(() => {
    setContador(contador+1)
    console.log("has modificado la fecha " + contador);
  }, [fecha])

  return (
    <div>
      <h1>Ejercicio UseEffect</h1>
      <br />
      <strong className={contador >= 10 ? 'label label-green' : 'label'}>{user}</strong>
      <form>
        <br />
        <input
          type="text"
          onChange={modifyUser}
          placeholder='cambia nombre'>
        </input>
        <p>{fecha}</p>
      </form>
      <button onClick={cambiaFecha}>cambiar fecha</button>
      {user == "ANA" && <AvisoComponent/> }
    </div>
  )
}


