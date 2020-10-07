import { types } from "../types/types";

const initialState = {
    uid: '123',
    displayName: 'sarasa',
};

/* El reducer va a devolver un objeto con el uid y el nombre, recibe un state y un action */
export const authReducer = (state = initialState, action)=>{
    switch(action.type){

        case  types.login:

        return {
            uid: action.payload.uid,
            name: action.payload.displayName
        }
        break;
        case  types.logout:

        return {}

        break;
        
        default:
            return state;
        break;

    }

}