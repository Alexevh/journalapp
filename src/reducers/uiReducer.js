
/* Reducer para el control de UI */

import { types } from "../types/types";

/* el state inicia; va a ser este objetop */
const initialState = {
    loading: false,
    msgError: null
}


/* Este reducer maneja el state de los items de la UI */
export const uiReducer = ( state= initialState, action)=> {

    switch (action.type) {
        case types.uiSetError:
            
            return {
                ...state, msgError: action.payload
            };

            case types.uiRemoveError:
            
                return {
                    ...state, msgError: null
                }
                case types.uiStartLoading:
            
                    return {
                        ...state, loading: true
                    }
                case types.uiFinishLoading:
            
                    return {
                            ...state, loading: false
                       }
    
        default:
            return state;
    }

}