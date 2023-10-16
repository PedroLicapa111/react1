import React,{useState, Fragment} from 'react'

const C02aumentar = (valor) => {

    const [edad, setEdad]= useState(valor);  

    const aumentar = () => {
        
        console.log("Aumentar");
        setEdad(edad + 1)
    }

    return (
        <Fragment>
            <h3>Edad: {edad}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    )
}

export default C02aumentar
