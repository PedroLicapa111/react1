import React,{useState, Fragment} from 'react'

const C02aumentar = () => {

    const [edad, setEdad]= useState(20);
    const xVariable = 30;

    const aumentar = (xVariable) => {
        //xVariable=30
        console.log("Aumentar");
        setEdad(xVariable + 1)
    }

    return (
        <Fragment>
            <h3>Edad: {xVariable}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    )
}

export default C02aumentar
