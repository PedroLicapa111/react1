import logo from './logo.svg';
import './App.css';
import C01componente from './componentes/C01componente';
import C04variable from './componentes/C04variable';

function App() {
  return (
    <div>
      <h1>React</h1>
      <C01componente/>
      <C04variable xVariable="Leer esta variable" />
    </div>
  );
}

export default App;
