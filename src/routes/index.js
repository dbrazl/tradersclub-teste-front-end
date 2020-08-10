import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Vehicle from '../pages/Vehicle';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/vehicle/:id" exact component={Vehicle} />
            <Route path="/" component={NotFound} />
        </Switch>
    );
}

export default Routes;
