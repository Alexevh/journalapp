import { types } from "../types/types"


/* esta accion  */
export const setError = (err)=> ({

    type: types.uiSetError,
    payload: err

});

export const removeError = ()=> ({

    type: types.uiRemoveError,
    

});
