import './App.css';
import Ejercicio from './components/Ejercicio';
import MiFirstState from './components/MiFirstState';

function App() {
  
  const year = new Date().getFullYear()

  return (

    <div className="App">
      <header className="App-header">
        <h1>Estados</h1>
        <br/>
        <MiFirstState/>
        <hr/>
        <h1>Año {year}</h1>
        <br/>
        <Ejercicio year = {year}/>
      </header>

{/* cargamos el componente */}
    </div>
  )

}
  
export default App;
