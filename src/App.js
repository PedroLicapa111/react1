import AppForm from './componentes/AppForm';

function App() {  
  
  return (
    <div style={{background:"yellow", 
    width:"350px", 
    padding:"10px"}}>            
      <AppForm/>
      <i class="large material-icons">insert_chart</i>

      <p>1. Juan Manuel 23 Masculino    x   A</p>
      <p>2. Deigo Gabriel 29 Masculino    x   A</p>
      <p>3. Luis Miguel 41 Masculino    x   A</p>
    </div>
  );
}

export default App;
