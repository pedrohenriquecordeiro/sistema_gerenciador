import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import LoginClient from '../pages/Client/LoginClient';
import HomeClient from '../pages/Client/HomeClient';
import LoginUser from '../pages/User/LoginUser';
import HomeUser from '../pages/User/HomeUser';

export const Routes = () => {
    return(
        <Switch>
            <Route path = '/' component = {Home} exact />
            <Route path = '/client' component = {LoginClient} exact/>
            <Route path = '/client-on' component = {HomeClient} exact/>
            <Route path = '/user' component = {LoginUser} exact/>
            <Route path = '/user-on' component = {HomeUser} exact/>
        </Switch>
    )
}
