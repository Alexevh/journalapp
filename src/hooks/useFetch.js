import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {


    /* voy a guardar la referencia para desmontarlo si se cuelga o se corta , la idea de este usref es mantener la referencia
    de este objeto cuando el componente eta vivo o montado*/
    const isMounted = useRef(true)

    const [state, setState] = useState({ data: null, loading: true, error: null });


    /* esto lo va a hacer una vez cuando carga, el cuerpo del effect no hace nada, solo lo pongo para
    poder usar el cleanup, al hacer el return cuando se elimina pasamos el ismounted a falso */
    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        /* mientras cargo las cosas reseteo todo */
        setState({ data: null, loading: true, error: null });

        /* hago el fetch que regresa una promesa. then lo paso a json que es otra promesa y then ya tengo la data */
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                /* siesta montado entonces puedo llamar al setstate */
                if (isMounted.current) {
                    /* AHOra que tengo los datos del fetch hago los cambios */
                    setState({

                        loading: false,
                        error: null,
                        data: data

                    });
                }



            });


    }, [url])

    /* en este caso solo retorno el objeto  */
    return state;

}
