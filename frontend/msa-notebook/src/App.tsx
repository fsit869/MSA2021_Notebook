import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MainContent from './contentpages/MainContent';
import Header from './components/Header';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import { Test } from './components/Test';


function App() {
  // Add state variable here to see if logged in or not.

  return (
    <React.Fragment>
      <Header></Header>
      <Switch>
        <Route path="/home" component={MainContent}/>
        <Route path="/test" component={Test}/>
      </Switch>
    </React.Fragment>
  )
}

export default App;
