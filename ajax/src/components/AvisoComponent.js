import React, { useEffect } from 'react'

export const AvisoComponent = () => {

useEffect(() => {
  // Se ejecuta una vez cuando se monta (array vacio)
  alert("el componente aviso esta montado");
  // Se ejecuta una vez cuando se desmonta

  return () => {
    alert('componente desmontado')
  }
}, [])

  return (
    <div>
    AvisoComponent
    <h1>Saludos Ana</h1>
    </div>
  )
}
