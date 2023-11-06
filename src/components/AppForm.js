import React from 'react';
import { db } from '../firebase/firebase';
import { useState } from 'react';
import { addDoc, collection, getDoc, updateDoc, doc } from 'firebase/firestore';
import { useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppForm = (props) => {
  ///////////////////// GUARDAR / ACTUALIZAR /////////////////
  const camposRegistro = { nombre:"", edad:"", genero:"" }
  const [objeto, setObjeto] = useState(camposRegistro);

  const manejarEnvios = async(e) => {    

    try {
      e.preventDefault();

      if(props.idActual === "") {
        if(validarForm()){
          addDoc(collection(db, 'persona'), objeto);  
          console.log("Se guardo con éxito...");
        }else{
          console.log("No se guardó");
        }
      }else{
        await updateDoc(doc(collection(db, "persona"), props.idActual), objeto);
        console.log("Se actualizó en BD");
        props.setIdActual('');            
      }
      setObjeto(camposRegistro);
    } catch (error) {
      console.log("Error en CREAR o UPDATE: ", error);
    }
  }

  useEffect(() => {
    if(props.idActual === ""){
      setObjeto({...camposRegistro});
    }else{
      obtenerDatosPorId(props.idActual);
    }
  }, [props.idActual]);

  const obtenerDatosPorId = async (xId) => {
    const objPorId = doc(db, "persona", xId);
    const docPorId = await getDoc(objPorId);
    if(docPorId.exists()) {
      setObjeto(docPorId.data());      
    }else {
      console.log("No hay doc...");
    }
  }
  
  const validarForm = () => {
    if(objeto.nombre === "" || /^\s+$/.test(objeto.nombre)){
      alert("Escriba nombre...");
      return false;
    }

    if(objeto.edad === "" || /^\s+$/.test(objeto.edad)){
      alert("Escriba edad...");
      return false;
    }

    if(objeto.genero === "" || /^\s+$/.test(objeto.genero)){
      alert("Seleccionar genero...");
      return false;
    }
    
    return true;
  }

  const manejarCambiosEntrada = (e) => {
    //console.log(e.target.value);        //Obtiene valor ingresado
    const {name, value} = e.target;       //name, value recibe de target
    console.log(name, value);             //obtiene name y value
    setObjeto({...objeto, [name]: value});//agrega a objeto name y value
  }

  return (

    <div style={{background: "orange", padding:"10px", textAlign:"center"}}>
      <h>AppForm.js</h> <br/>
      <form onSubmit={manejarEnvios}>
        <input onChange={manejarCambiosEntrada} value={objeto.nombre} name='nombre' type='text' placeholder='Nombres: '></input><br></br>
        <input onChange={manejarCambiosEntrada} value={objeto.edad} name='edad' type='text' placeholder='Edad: '></input><br></br>
        <input onChange={manejarCambiosEntrada} value={objeto.genero} name='genero' type='text' placeholder='Género: '></input><br></br>
        <br></br>
        <button>
          {props.idActual === "" ? "Guardar" : "Actualizar"}
        </button>
      </form>
    </div>

    /*<div>
      <form className='card card-body' onSubmit={manejarEnvios}>
        <button className='btn btn-primary btn-block'>
          Formulario (AppForm.js)
        </button>
        <div className='form-group input-group'>
          <div className='input-group-text bd-light'>
            <i className='material-icons'>group-add</i>
          </div>
          <input type='text'className='form-control' name='nombre' placeholder='Nombres:' onChange={manejarCambiosEntrada} value={objeto.nombre} />
        </div>

        <div className='form-group input-group'>
          <div className='input-group-text bd-light'>
            <i className='material-icons'>star-half</i>
          </div>
          <input type='text'className='form-control' name='edad' placeholder='Edad:' onChange={manejarCambiosEntrada} value={objeto.edad} />
        </div>

        <div className='form-group input-group'>
          <div className='input-group-text bd-light'>
            <i className='material-icons'>insert-link</i>
          </div>
          <input type='text'className='form-control' name='genero' placeholder='Género:' onChange={manejarCambiosEntrada} value={objeto.genero} />
        </div>

        <button className='btn btn-primary btn-block'>
          {props.idActual === ""? "Guardar" : "Actualizar"}
        </button>
      </form>
    </div>*/
  )
}

export default AppForm