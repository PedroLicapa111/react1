import React,{useState, Fragment} from 'react'

const C02aumentar = (msj) => {

    const [edad, setEdad]= useState(20);

    const aumentar = (msj) => {
        xVariable=30
        console.log("Edad");
        setEdad(msj.xVariable)
    }

    return (
        <Fragment>
            <h3>Aumentar edad {edad}</h3>
            <button onClick={aumentar}>Edad</button>
        </Fragment>
    )
}

export default C02aumentar
