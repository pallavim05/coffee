import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Feactures from './Components/Feactures/Feactures';
import Menu from './Components/Menu/Menu';
import Choose from './Components/Choose/Choose';
import Stats from './Components/Stats/Stats';
import Gallery from './Components/Gallery/Gallery';
import Offer from './Components/Offer/Offer';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Feactures/>
      <Menu/>
      <Choose/>
      <Stats/>
      <Gallery/>
      <Offer/>
      <Team/>
      
    </div>
  );
}

export default App;
