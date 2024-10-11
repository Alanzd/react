import './App.css';
import { AjaxComponent } from './components/AjaxComponent';
import { AvisoComponent } from './components/EjercicioUseEffect';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <AvisoComponent/>
        <AjaxComponent/>
      </header>
    </div>
  )

}
  
export default App;
