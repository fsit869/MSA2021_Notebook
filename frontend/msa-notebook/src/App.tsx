import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MainContent from './contentpages/MainContent';
import Header from './components/Header';
import { createStyles, CssBaseline, makeStyles, Theme } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router';
import { Test } from './components/Test';
import { LandingPage } from './contentpages/LandingPage';


function App() {
  // Add state variable here to see if logged in or not.

  return (
    <React.Fragment>
      <Header></Header>
      <Switch>
        <Route path="/home" component={MainContent}/>
        <Route path="/test" component={LandingPage}/>
        <Redirect from="/" to="home" />
      </Switch>
    </React.Fragment>
  )
}

export default App;
