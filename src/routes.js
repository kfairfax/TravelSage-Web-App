import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CreateTour from './components/CreateTour/CreateTour';
import Dashboard from './components/Dashboard/Dashboard';
import EditTour from './components/EditTour/EditTour';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Tour from './components/Tour/Tour';
import Tours from './components/Tours/Tours';

export default(

    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/tours' component={Tours}/>>
        <Route path='/tour' component={Tour}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/create' component={CreateTour}/>
        <Route path='/edit' component={EditTour}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)