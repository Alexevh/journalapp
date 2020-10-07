import { useState } from "react"


export const useCounter = (initialState = 1) => {

    const [counter, setCounter] = useState(initialState);

    /* funcion de imcrementar */
    const increment = (factor = 1)=> {
        setCounter(counter + 1);
    }

    /* funcion de restar */
    const decrement = (factor = 1)=> {
        setCounter(counter - 1);
    }

    /* devuelvo el objeto con todo */
    return {
        counter,
        increment,
        decrement
    }
 
}
