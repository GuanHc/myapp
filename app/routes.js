/**
 * Created by miaojilvxing on 16/4/14.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
<Route handler={App}>
    <Route path='/' handler={Home} />
    </Route>
);