import React, {useState, useRef} from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import Depts from './sections/Depts'
import Events from './sections/Events'
import Gallery from './sections/Gallery'
import './App.css';

function App() {
  let [refs] = useState({
    home: useRef(),
    featured: useRef(),
    events: useRef(),
    gallery: useRef(),
    depts: useRef(),
  })
  return (
    <div className="App">
      <Navbar refs={refs} />
      <Home setRef={{home: refs.home, featured: refs.featured}} />
      <Events setRef={refs.events} />
      <Gallery setRef={refs.gallery} />
      <Depts setRef={refs.depts} />
    </div>
  );
}

export default App;
