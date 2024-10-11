import React from 'react'
import { Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
      <h1>PanelControl</h1>
      <nav>
        <ul>
          <li>
            <a href="/panel/inicio">Inicio</a>
          </li>
          <li>
            <a href="/panel/crear-articulos">Crear articulos</a>
          </li>
          <li>
            <a href="/panel/gestion-usuarios">Gestion usuarios</a>
          </li>
          <li>
            <a href="/panel/acerca-de">Acerca de </a>
          </li>
        </ul>
      </nav>

      {/* utilizo el componente outlet que indica que quiero cargar a partir de aqui (/panel) las subrutas, asi no hace falta hacer la ruta /panel/loquesea */}
      <Outlet/>
    </div>
  )
}
