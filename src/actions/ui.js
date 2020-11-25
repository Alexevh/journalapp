import { types } from "../types/types"


/* esta accion  */
export const setError = (err)=> ({

    type: types.uiSetError,
    payload: err

});

export const removeError = ()=> ({

    type: types.uiRemoveError,
    

});

/* En estas dos funciones uso el return en lugar de usar la forma anterior solo para que quede otra forma de hacer lo mismo */
export const startLoading = ()=> {

    return {
        type: types.uiStartLoading,
    }

}

export const finishLoading = ()=> {
    return {
        type: types.uiFinishLoading,
    }
}


