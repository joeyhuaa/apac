import React from 'react';
import Navbar from './components/Navbar'
import Depts from './sections/Depts'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Depts />
    </div>
  );
}

export default App;
