import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from "react-router-dom";
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Inicio } from '../components/Inicio';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { PanelControl } from '../components/PanelControl';
import { InicioPanel } from '../components/panel/InicioPanel';
import { Crear } from '../components/panel/Crear';
import {Gestionar } from '../components/panel/Gestionar';
import { Acerca } from '../components/panel/Acerca';


export const RouterPrincipal = () => {
  return (

    // todas las rutas tienen que estar dentro de browserRouter
    // se define una plantilla ppal de nuestra web, se cargan componentes
    // 
    <BrowserRouter>
    <h1>Cabecera</h1>
    <hr/>
    <nav>
      <ul>
        <li>
          <NavLink
            to='/inicio'
            className={({isActive}) =>  isActive ? "activated" : ""}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/articulos'
            className={({isActive}) =>  isActive ? "activated" : ""}>
            Articulos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/contacto'
            className={({isActive}) =>  isActive ? "activated" : ""}>
            Contactos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/panel'
            className={({isActive}) =>  isActive ? "activated" : ""}>
            Panel de Control
          </NavLink>
        </li>
      </ul>
    </nav>
    <section className="contenido_ppal">
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/articulos' element={<Articulos/>}/>

        {/* puedo pasar params a través de la url: */}
        <Route path='/persona/:nombre/:apellido' element={<Persona/>}/>
        <Route path='/persona/:nombre' element={<Persona/>}/>
        <Route path='/persona' element={<Persona/>}/>

        {/* navigate to nos dirige a la pagina que le indicamos */}
        <Route path="/redirigir" element={<Navigate to="/persona/ana/lanz"/>}></Route>
        <Route path="*" element={<Error/>}/>
        <Route path="/panel" element={<PanelControl />}>
          <Route path="inicio" element={<InicioPanel/>}/>
          <Route path="crear-articulos" element={<Crear/>}/>
          <Route path="gestion-usuarios" element={<Gestionar/>}/>
          <Route path="acerca-de" element={<Acerca/>}/>

        </Route>
      </Routes>
      </section>

    </BrowserRouter>
  )
}
