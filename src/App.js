import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { MapRecycle, Contact, Add } from "./pages";
import './App.scss';
import { Menu } from "./Layout";
import styled from 'styled-components';

const Wrapper = styled('div')`

  margin-left: 100px;

`


function App() {
  return (
    <Router>
      <Menu />
      <Wrapper>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/map" />}
          />
          <Route exact path="/map" component={MapRecycle} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
