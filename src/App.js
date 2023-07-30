// Importamos el logotipo de React y los estilos del archivo "App.css".
import logo from './logo.svg';
import './App.css';

// Definimos el componente funcional "App".
function App() {
  return (
    <div>
      <header>
        {/* Mostramos el logotipo de React */}
        <img src={logo} alt="logo" />
        
        {/* Mostramos un texto con instrucciones */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* Agregamos un enlace para aprender sobre React */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Exportamos el componente "App" para poder utilizarlo en otros archivos.
export default App;
