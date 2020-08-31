import React from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import Depts from './sections/Depts'
import Events from './sections/Events'
import Gallery from './sections/Gallery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Events />
      <Gallery />
      <Depts />
    </div>
  );
}

export default App;
