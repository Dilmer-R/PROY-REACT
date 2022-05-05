import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);

  const click = () => {
    setNumClics(numClics + 1);
  };
  const reini = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo"
        src={freeCodeCampLogo}
        alt="logo"/>
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton
          texto="Click"
          esBotonDeClic={true}
          manejarClic={click} />

        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reini} />
      </div>
    </div>
  );
}

export default App;
