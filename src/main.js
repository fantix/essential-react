/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';

// Routes
import Routes from './common/components/Routes';

// Relay
import Relay from 'react-relay';
import useRelay from 'react-router-relay';

// Base styling
import './common/base.css';


// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Relay server address
Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:5000/graphql')
);

// Render the router
ReactDOM.render((
    <Router
        history={browserHistory}
        routes={Routes}
        render={applyRouterMiddleware(useRelay)}
        environment={Relay.Store}
    />
), document.getElementById(DOM_APP_EL_ID));

