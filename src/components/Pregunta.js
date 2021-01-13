import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';


const Pregunta = ( { guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // Definir el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);
;
    // Función que lee el presupuesto
    const definirPresupuesto = e => {
        //console.log(parseInt(e.target.value));
        guardarCantidad(parseInt(e.target.value, 10));
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault(); // para evitar el envio query string en la parte superior y y tampoco recargar la página

        // Validar 
        if(cantidad < 1 || isNaN( cantidad )){
            guardarError(true);
            return;
        }


        // Si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }


    return (  
        <Fragment>
            
            <h2> Ingresa tu presupuesto </h2>

            { error ? <Error mensaje = "El Presupuesto es Incorrecto"/> : null }

            <form 
                onSubmit = {agregarPresupuesto}
            >
                <input 
                    type = "number"
                    className = "u-full-width"
                    placeholder = "Ingresa tu presupuesto"
                    onChange = {definirPresupuesto}
                />

                <input 
                    type = "submit"
                    className = "button-primary u-full-width"
                    value = "Definir Presupuesto"
                />
            </form>

        </Fragment>
    );
}
 
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;