import React, { Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './Services/Home';
import LoginPage from './Services/Login';
import RegisterPage from './Services/Register';

import  * as ROUTES from './Components/Routes/routes';

export default class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path={ROUTES.HOME} component={HomePage}/>
                    <Route path={ROUTES.LOGIN} component={LoginPage} />
                    <Route path={ROUTES.REGISTER} component={RegisterPage}/>
                </div>
            </Router>
        )
    }
}