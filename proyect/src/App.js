import { useState } from 'react';
import './App.css';
import { Create } from './components/Create';
import { List } from './components/List';
import { Search } from './components/Search';
import './styles.css';

function App() {

// el estado listState estaba en el componente crear, si lo hago formar parte del componente principal (App.js) ya se lo puedo pasar a cualquier otro componente
   const [listState, setListState] = useState([])
   
  return (
    <div className="App">

      <div className="layout">

        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>

          <h1>MisPelis</h1>
        </header>

        <nav className="nav">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Peliculas</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>

        <section id="content" className="content">
          {/* comparto desde App.js listState, paso 2 props para compartir info del padre App al hijo List */}
          <List listState={listState} setListState={setListState} />
        </section>
        <aside className="lateral">
          <Search listState={listState} setListState={setListState}/>

          {/* paso el metodo setListState para que se actualice el crear una peli */}
          <Create setListState={setListState}/>
        </aside>

        <footer className="footer">
          &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
        </footer>

      </div>

    </div>
  );
}

export default App;
