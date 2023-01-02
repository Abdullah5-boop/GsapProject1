import logo from './logo.svg';
import './App.css';
import Banner from './Component/other/Banner/Banner';
import About from './Component/other/About/About';
import Table1 from './Component/other/Table1/Table1';
import Photo1 from './Component/other/2Photos/Photo1';
import { useEffect } from 'react';
import LocomotiveScroll from "locomotive-scroll";
import './Component/Hook/locamotive.css'
import Temp1 from './Component/other/PhotoMask/Temp1';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".App"),
      smooth: true,
      multiplier: 1,
      class: 'is-reveal'

    });
  })
  return (
    <div className="App">
      <div
        data-scroll-container
      >
        <Banner></Banner>
        <About></About>
        <Photo1></Photo1>
        <Table1></Table1>
       
      </div>


    </div>
  );
}

export default App;
