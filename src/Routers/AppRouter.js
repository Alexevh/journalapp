import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import  {firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

  /* Rutas principales */
export const AppRouter = () => {


    const dispatch  = useDispatch();

    /* voy a crear un state local, mientras esto sea true no voy a mostrar nada mas de mi aplicacion, va a cambiar cuando firebase me diga
    que esta autenticado el susuario */
    const [cheking, setCheking] = useState(true);

    /* este state lo voy a usar para guardar si el usuario esta autenticado o no, lo voy a usar uego para
    la nevagcion de rutas */
    const [isLoggedin, setisLoggedIn] = useState(false);


    /* voy  a usar un efecto para controlar ciertas cosas de firebase */
    useEffect(()=> {

        /*este metodo  regresa un observable, todoas estas cosas son de la api de firebase*/
        firebase.auth().onAuthStateChanged((user)=> {

            /* esto es una forma de decir if user.uid existe entonces hago algo, si no la forma larga es if user !==null and user.uid!==null */
            if (user?.uid){

                dispatch(login(user.uid, user.displayName));
                setisLoggedIn(true);
            } else {
                setisLoggedIn(false);
            }

            setCheking(false);
            

        });

    }, [dispatch, setCheking, setisLoggedIn]);


    /* si esta chequeando voy a mostrar un espere.. es una chanchada y debria poner algo como </Loading> que seria un componente  */
    if (cheking){

        return (<h1>Espere.....</h1>)
    }

    return (
        <Router>
            <div>
                <Switch>
                   
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={JournalScreen} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}
