import React, {useState} from 'react'

export default function MiFirstState() {
  
    // useState tiene una variable que guarda el dato del estado y la funcion que me permite acceder al estado y cambiarlo

    const [ nombre, setNombre] = useState("Ana")
    const changeName = (e, nombreFijo) => {
        // setNombre me permite cambiar el estado     
       setNombre (nombreFijo)
    }
    return (
    <div>
        <strong>{nombre}</strong>
        <button onClick={ e => changeName(e, "Pepe")}>Cambiar nombre por Pepe</button>

        <input type='text' onChange={ e => changeName (e, e.target.value) }  placeholder='cambia el nombre'/> 
    </div>
  )
}
