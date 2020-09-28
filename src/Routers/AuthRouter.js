import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        /* Los pongo en un div al switch por que asi le puedo asignar un css o scss a todas las rutas que los contienen
            voy a poner un subdiv tambien para una caja blanca
        */
        <div className='auth__main'>

            <div className='auth__box-container'>

            <Switch>
                <Route exact path="/auth/login" component={LoginScreen} />
                <Route exact path="/auth/register" component={RegisterScreen} />
                <Redirect to="/auth/register" />
            </Switch>
            </div>

         
            
        </div>
    )
}
