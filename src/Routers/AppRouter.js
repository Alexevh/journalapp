import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

  /* Rutas principales */
export const AppRouter = () => {
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
