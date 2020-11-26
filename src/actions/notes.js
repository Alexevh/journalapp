
/* aca van las acions que el reducer va a llamar para las notas */

import { db } from "../firebase/firebase-config";

/* esto es una tarea asincrona por lo cual el return es un callback */
export const startNewNote = ()=>{

    console.log('entro al dicpatch');


    return async ( dispatch, getState )=> {

        const {uid} = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()

        }
        
        const docRef = await db.collection(`${ uid }/journal/notes`).add(newNote).then( (d)=>{
            console.log('el resultado es ', d);
        })
        .catch( (e)=> {
            console.log('me dio un errro', e);
        });

        console.log('fin del startnewnote');
        
    }

}