import React, {Component} from 'react';
import MainContent from './contentpages/MainContent';
import Header from './components/Header';
import {Redirect, Route, Router, Switch} from 'react-router';
import {DashBoard} from "./contentpages/DashBoard";
import {BrowserRouter, HashRouter} from "react-router-dom";

/**
 * Parent component of entire app.
 */
function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
            <Header></Header>
                <Switch>
                    <Route exact path="/tasks" component={MainContent}/>
                    <Route exact path="/dashboard" component={DashBoard}/>
                    <Redirect from="/" to="dashboard"/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;
