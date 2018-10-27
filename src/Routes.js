import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
        <UnauthenticatedRoute path="/register" exact component={Register} props={childProps} />
        {/*<AuthenticatedRoute path="/settings" exact component={Settings} props={childProps} />*/}
        {/*<AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />*/}
        {/*<AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />*/}
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
    </Switch>;