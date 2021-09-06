import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import MainContent from './contentpages/MainContent';
import Header from './components/Header';
import {createStyles, CssBaseline, makeStyles, Theme} from '@material-ui/core';
import {Redirect, Route, Switch} from 'react-router';
import {Test} from './components/Test';
import {DashBoard} from "./contentpages/DashBoard";
import {BrowserRouter, HashRouter} from "react-router-dom";


function App() {
    // Add state variable here to see if logged in or not.

    return (
        <React.Fragment>
            <Header></Header>
            <HashRouter >
                <Switch>
                    <Route path="/tasks" component={MainContent}/>
                    <Route path="/dashboard" component={DashBoard}/>
                    <Redirect from="/" to="dashboard"/>
                </Switch>
            </HashRouter >
        </React.Fragment>
    )
}

export default App;
