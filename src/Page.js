/**
 * Copyright (c) 2018-2019,  Charlie Feng. All Rights Reserved.
 */

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import App from './App';

export default () => {
    return (
        <Router>
            <Switch>
                <AuthenticatedRoute
                    exact
                    path="/"
                    render={() => <Redirect to="/app/dashboard/index" push />}
                />
                <AuthenticatedRoute path="/app" component={App} />
                <Route path="/404" component={NotFound} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};
