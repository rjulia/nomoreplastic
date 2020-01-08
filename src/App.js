import React from 'react';
import './App.scss';
import { Map, Menu, Aside } from "./Containers";
import HongKong from "./assets/images/hk.jpg"

function App() {
  return (
    <div className="App">
      <Menu />
      <Map />

      <Aside />
      <div className="img-background">

        <img src={HongKong} alt="hk" />
      </div>
    </div>
  );
}

export default App;
