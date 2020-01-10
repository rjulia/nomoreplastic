import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LOCATIONS_QUERY } from "./services/apollo/queries";
import './App.scss';
import { MapContainer, Menu, Aside } from "./Containers";
import GetCurrentPosition from "./utils/GetCurrentPosition";
import { Spinner } from './components';
import HongKong from "./assets/images/hk.jpg";

function App() {

  const { data, loading, error } = useQuery(LOCATIONS_QUERY);
  if (loading) return <Spinner />;
  if (error) return <p>ERROR</p>;
  console.log(data)
  return (
    <div className="App">
      <GetCurrentPosition />
      <Menu />
      <MapContainer />

      <Aside />
      <div className="img-background">

        <img src={HongKong} alt="hk" />
      </div>
    </div>
  );
}

export default App;
