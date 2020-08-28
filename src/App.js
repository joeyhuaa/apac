import React from 'react';
import Navbar from './components/Navbar'
import Depts from './sections/Depts'
import Events from './sections/Events'
import Gallery from './sections/Gallery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Events />
      <Gallery />
      <Depts />
    </div>
  );
}

export default App;
