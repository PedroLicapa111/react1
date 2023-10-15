import React,{useState, Fragment} from 'react'

const C02aumentar = () => {

    const [numero, setNumero]= useState(0);

    const aumentar = () => {
        console.log("Hacer click");
        setNumero(numero + 1)
    }

    return (
        <Fragment>
            <h3>Mi primer componente {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    )
}

export default C02aumentar
