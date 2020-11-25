import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { authReducer } from '../reducers/authreducer';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';


/* extraido de la msma pagina de redux */
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



/* a un store no le puedo mandar mas de un reducer pero como voy a usar muchos necesito combinarlos en una sola
variable, para eso uso esta funcion */
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

/*  el segundo argumento lo obtuve de la doc que es https://github.com/zalmoxisus/redux-devtools-extension#usage 
 el thubk  es un middleware, me va a permitir trabajar acciones asincronas en la aplicaicon, le tengo que configirar entonces
 el store con el conjunto de reducers mas ese segundo parametro

*/
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

