import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./App";
import Admin from "../admin/base";


export default (
    <Route path="/" component={App}>
        <Route path="admin" component={Admin}/>
    </Route>
);
