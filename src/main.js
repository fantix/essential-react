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
import Routes from './common/Routes';

// Relay
import Relay from 'react-relay';
import useRelay from 'react-router-relay';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

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

