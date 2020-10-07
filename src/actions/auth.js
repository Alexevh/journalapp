import { firebaseConfig, firebase, googleAuthProvider } from "../firebase/firebase-config";
/* las acciones son como los helpers */

import { types } from "../types/types"


/* voy a crear una funcion asincrona a ver si anda */
export const startLoginEmailPass = (email, password)=>{

    return (dispatch)=>{

        setTimeout(() => {

            dispatch(login(123, 'sanata'));
            console.log('login sanata');
            
        }, 3500);
    }

}


/* Login de google */
export const startGoogleLogin =()=>{
    /* como es una tarea asincrona la pongo como un return */
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        /* es una promesa que retorna las credenciales del usuario, como en el elemento de credenciales tengo el objeto usr
        ya lo desestructuro para quedarme solo con eso */
        .then(( {user}) => {
            
            /* ahora eu Google se encargo de obtener un usuario valido voy a hacer el dispatch del login de mi app */
            dispatch(login(user.uid, user.displayName));
        });
    }

}



/* Esta es la accion que voy a llamar cuando tenga el uid y el displayName */
export const login = (uid, displayName)=>{


    return {
        type: types.login,
        payload: {
            uid: uid,
            displayName: displayName
        }
        
    }
}