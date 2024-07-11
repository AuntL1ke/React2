import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Artist from './components/Artist';
import Collection from './components/Collection';
import Popular from './components/Popular';
import './App.css';

function App() {
 
  const [randomNumber, setRandomNumber] = useState(null);


  const generateRandomNumber = (min, max) => {
    const minVal = Math.ceil(min);
    const maxVal = Math.floor(max);
    const newRandomNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    setRandomNumber(newRandomNumber);
  };


  const [trafficLightColor, setTrafficLightColor] = useState('red');


  const changeTrafficLightColor = () => {
    switch (trafficLightColor) {
      case 'red':
        setTrafficLightColor('green');
        break;
      case 'green':
        setTrafficLightColor('yellow');
        break;
      case 'yellow':
        setTrafficLightColor('red');
        break;
      default:
        setTrafficLightColor('red');
        break;
    }
  };

  return (
    <div className='App'>
      <h1>Welcome to My React App</h1>


      <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', cursor: 'pointer' }} onClick={() => generateRandomNumber(1, 100)}>
        Click to Generate Random Number
        {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
      </div>

   
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '50px', height: '50px', backgroundColor: 'red', borderRadius: '50%', margin: '10px', display: 'inline-block' }} onClick={changeTrafficLightColor}></div>
        <div style={{ width: '50px', height: '50px', backgroundColor: 'yellow', borderRadius: '50%', margin: '10px', display: 'inline-block' }} onClick={changeTrafficLightColor}></div>
        <div style={{ width: '50px', height: '50px', backgroundColor: 'green', borderRadius: '50%', margin: '10px', display: 'inline-block' }} onClick={changeTrafficLightColor}></div>
      </div>

      {/* Закоментовані компоненти для меню та маршрутизації */}
      {/* <header className='header'>
        <Menu/>
      </header>
      <div className='main-context'>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/artist" element={<Artist/>} />
            <Route path="/collection" element={<Collection/>} />
            <Route path="/popular" element={<Popular/>} />
          </Routes>
        </main>
      </div> */}
    </div>
  );
}

export default App;
