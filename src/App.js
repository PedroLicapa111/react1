import logo from './logo.svg';
import './App.css';
import C01componente from './componentes/C01componente';
import C04variable from './componentes/C04variable';
import C02aumentar from './componentes/C02aumentar';
import AppForm from './componentes/AppForm';

function App() {  
  
  return (
    <div>
      <h1>React</h1>
      <C01componente/>
      <C04variable xVariable="Esta es la variable" />
      <C02aumentar/>
      <AppForm/>
    </div>
  );
}

export default App;
