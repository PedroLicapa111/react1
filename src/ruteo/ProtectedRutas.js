
import { Routes, Route, Outlet, Switch, Redirect} from 'react-router-dom';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
//import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

///////////////// PROTEGIDA - SistemaCRUD //////////////
import SistemaCRUD from '../protegido/SistemaCRUD';
import ListaDeAlumnos from '../protegido/sistemacrud/ListaDeAlumnos';
import ListaDeDeportes from '../protegido/sistemacrud/ListaDeDeportes';
import ListaDeEgresados from '../protegido/sistemacrud/ListaDeEgresados';
import ListaDeCarreras from '../protegido/sistemacrud/ListaDeCarreras';

///////////////// PROTEGIDA - SistemaFILE //////////////
import SistemaFILE from '../protegido/SistemaFILE';
import Documentos from '../protegido/sistemafile/Documentos';
import Fotos from '../protegido/sistemafile/Fotos';
import Word from '../protegido/sistemafile/Word';
import Videos from '../protegido/sistemafile/Videos';

//////////////////////// PAG. PUBLICOS /////////////////


//////////////////////// PAG. MENU /////////////////
import AppLista from '../protegido/sistemacrud/AppLista';

const ProtectedRutas = () => {
  const { user } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
      if (user) {
        signOut(auth)
          .then(() => {
            // Cierre de sesión exitoso
            navigate('/home'); // Redirigir a ruta /home
          })
          .catch((error) => {
            console.error('Error al cerrar sesión:', error);
          });
      }
    }

  return (
    <div style={{ background:"royalblue",  padding:"10px" }}>
      <nav>
        <div id="login">
          <ul>
            <li><Link to="/nuevoregistro">Registrar</Link></li>
            <li><Link onClick={handleSignOut} >Cerrar sesión</Link> </li> 
          </ul>
        </div>
            
        <div id="menu">
          <ul>
            <li><Link to="/sistema-crud/carreras">Carreras</Link> </li>
            <li><Link to="/sistema-crud/deportes">Deportes</Link> </li>
            <li><Link to="/sistema-crud/egresados">Egresados</Link> </li> 
            <li><Link to="/sistema-crud/alumnos">Alumnos(AppLista)</Link> </li>                                  

            <li><Link to="/sistema-file/videos">Videos</Link> </li>   
            <li><Link to="/sistema-file/fotos">Fotos</Link> </li>  
            <li><Link to="/sistema-file/documentos">PDF</Link> </li>
            <li><Link to="/sistema-file/word">Word</Link> </li>
            
          </ul>
        </div>
      </nav>

      <Routes>
        
        <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
          <Route index element={<SistemaCRUD />} />
          <Route path="alumnos" element={<ListaDeAlumnos />} />          
        </Route>
        
        <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
          <Route index element={<SistemaCRUD />} />
          <Route path="deportes" element={<ListaDeDeportes />} />          
        </Route>

        <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
          <Route index element={<SistemaCRUD />} />
          <Route path="egresados" element={<ListaDeEgresados />} />          
        </Route>

        <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
          <Route index element={<SistemaCRUD />} />
          <Route path="carreras" element={<ListaDeCarreras />} />          
        </Route>

        <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
          <Route index element={<SistemaFILE />} />
          <Route path="videos" element={<Videos />} />
        </Route>

        <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
          <Route index element={<SistemaFILE />} />
          <Route path="documentos" element={<Documentos />} />
        </Route>

        <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
          <Route index element={<SistemaFILE />} />
          <Route path="fotos" element={<Fotos />} />
        </Route>

        <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
          <Route index element={<SistemaFILE />} />
          <Route path="word" element={<Word />} />
        </Route>

      </Routes>        
    </div>
  )
}

export default ProtectedRutas;

function MarcoParaSistemaCRUD() {
  return (
    <div style={{background:"cornflowerblue", padding:"10px"}}>
      <h1>Marco sistema CRUD</h1>
      < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
    </div>
  );
}

function MarcoParaSistemaFILE() {
  return (
    <div style={{background:"white", padding:"10px"}}>
      <h1>Marco Sistema FILES</h1>
      < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
    </div>
  );
}


