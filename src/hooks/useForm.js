import { useState } from "react"


/* Hago este custom hook para manejar los eventos de cambio de estado de un formulario, es un
hook generico que voy a utilizar en todos mis forms , recibe el initial state que deberia ser un objeto de
esta forma { campo1: '', campo2: '' } son los campos con las variables del formulario a trabajar*/
export const useForm = (initialState = {}) => {
   
    const [values, setValues] = useState(initialState);

    /* Vy a resetear los campos del formulario */
    const reset = ()=>{
        setValues(initialState);
    }

    /* recibo el event como un objeto al que llamo target */
    const handleInputChange = ({target})=> {
        setValues({
            ...values,
            [target.name]: target.value

        });
    };

    return [values, handleInputChange, reset];

}
