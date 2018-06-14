import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CreateTour from './components/CreateTour/CreateTour';
import Dashboard from './components/Dashboard/Dashboard';
import EditTour from './components/EditTour/EditTour';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Tours from './components/Tours/Tours';
import TourDetails from './components/TourDetails/TourDetails';

export default(

    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/tours' component={Tours}/>
        <Route path='/tour/:tourId' component={TourDetails}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/create' component={CreateTour}/>
        <Route path='/edit/:tourId' component={EditTour}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)