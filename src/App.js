import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { MapRecycle, Contact, Add } from "./pages";
import { useQuery } from '@apollo/react-hooks';
import { LOCATIONS_QUERY } from "./services/apollo/queries";
import './App.scss';
import { Menu } from "./Layout";
import GetCurrentPosition from "./utils/GetCurrentPosition";
import { Spinner } from './components';
import styled from 'styled-components';

const Wrapper = styled('div')`

  margin-left: 100px;

`


function App() {

  const { data, loading, error } = useQuery(LOCATIONS_QUERY);
  if (loading) return <Spinner />;
  if (error) return <p>ERROR</p>;
  console.log(data)
  return (
    <Router>
      <GetCurrentPosition />
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
