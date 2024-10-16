import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom';
import { Pokemon } from './assets/pages/Pokemon';
import { Pokemons } from './assets/pages/Pokemons';
import { Items } from './assets/pages/Items';

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/pokemons:name" element={<Pokemon />} />
          <Route path="/pokemons" element={<Pokemons/>} />
          <Route path="/items" element={<Items />} />
          <Route path="/" element={<Pokemons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
