import React from 'react';
import './App.scss';
import { MapContainer, Menu, Aside } from "./Containers";
import HongKong from "./assets/images/hk.jpg"

function App() {
  return (
    <div className="App">
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
