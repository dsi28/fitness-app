import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/HomeComponent';
import Login from '../components/LoginComponent';
import CreateWorkout from '../components/CreateWorkoutComponent';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/createworkout' component={CreateWorkout} />
        <Redirect to='/'/>
    </Switch>
)