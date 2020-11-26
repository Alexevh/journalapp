/*
Aqui voy a describir como quiero que sea mi state, va a ser un objeto, el objeto va a tener una lista de notas y una nota
activa que puede ser null o ser un objeto
{
    notes: [],
    active: null,
    active: {
        id: 'HAGAGAGA'
        title: 'titulo´' 
        body: '',
        imageUrl: '',
        date: 1234567
    }
}

*/

const initialState = {
    notes: [],
    active: null
}


export const notesReducer = (state=initialState, action) => {


    switch (action.type) {
    
    
        default:
            return state;
    }


}