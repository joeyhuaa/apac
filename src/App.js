import React from 'react';
import Navbar from './components/Navbar'
import Depts from './sections/Depts'
import Events from './sections/Events'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Events />
      <Depts />
    </div>
  );
}

export default App;
