import React from 'react'
import { AppRouter } from './Routers/AppRouter'
import {Provider} from 'react-redux';
import { store } from './store/store';

/* El Provider es un high end component, le pongo a el aca en este punto el store para tenerlo disponible en toda mi aplicaicon
de esta forma voy a tener toda la data del store que enre otras coas incluyen todos mis reducers */

export const JornalApp = () => {
    return (
        <>
        <Provider store={store}>
            <AppRouter />
        </Provider>
          
        </>
    )
}
