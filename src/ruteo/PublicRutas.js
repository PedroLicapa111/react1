import React from 'react'
import { Routes, Route, Link, Outlet, Switch, Redirect} from 'react-router-dom';

import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

import Home from '../public/Home';

import Dashboard from '../public/Dashboard';
import LoginForm from '../login/LoginForm';
import Contacto from '../public/Contacto';
import RegisterForm from '../login/RegisterForm';
import Info from '../public/Info';
import News from '../public/News';



const PublicRutas = () => {
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
    <div style={{ background:"greenyellow", }}>
      <nav>
        <div id="login">
          <ul>
            <li><Link to="/iniciarsesion">Iniciar sesión</Link> </li>
            <li><Link to="/nuevoregistro">Registrar </Link></li>
            <li><Link onClick={handleSignOut} >Cerrar sesión</Link> </li>            
          </ul>
        </div>
        
        <div id="menu">
          <ul>
            <li><Link to="/home">Inicio(Home)</Link> </li>
            <li><Link to="/informacion">Informacion </Link></li>                    
            <li><Link to="/noticias">Noticias </Link></li>
            <li><Link to="/contacto">Contacto </Link></li>
          
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/nuevoregistro" element={<RegisterForm />} />
        <Route path="/iniciarsesion" element={<LoginForm />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/informacion" element={<Info />} />
        <Route path="/noticias" element={<News />} />
        
        <Route path="/" element={<Dashboard />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes> 
    </div>
  )
}

export default PublicRutas;

/*
{user ? (
              <li><Link onClick={handleSignOut} >Cerrar sesión</Link> </li> 
              ) : (
              <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
            )}
*/
