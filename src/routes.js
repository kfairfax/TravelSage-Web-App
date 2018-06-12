import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CreateTour from './components/CreateTour/CreateTour';
import Dash from './components/Dash/Dash';
import EditTour from './components/EditTour/EditTour';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import TourDetails from './components/TourDetails/TourDetails';
import Tours from './components/Tours/Tours';

export default(

    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/tours' component={Tours}/>>
        <Route path='/details/:tourid' component={TourDetails}/>
        <Route path='/dash' component={Dash}/>
        <Route path='/create' component={CreateTour}/>
        <Route path='/edit' component={EditTour}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)