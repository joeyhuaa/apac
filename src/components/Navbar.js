import React, {useState, useRef, useEffect} from "react";
import logo from '../img/logo.png'
import '../../src/App.css'
import menu from '../img/menu.png'

const Navbar = ({refs}) => {
  let [dropDisplay, setdropDisplay] = useState('none')  
  let navRef = useRef()
  window.addEventListener('resize', () => {if (window.innerWidth >= 900) setdropDisplay('none')})

  useEffect(() => console.log(navRef), [])

  let scrollTo = (ref, block='start') => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior:'smooth',
        block:block
      })
    }
  }

  return (
    <div>
      <div id='nav' ref={navRef}>
        <img id='logo' src={logo} width="12%" onClick={() => scrollTo(refs.home)} />
        <ul id='navlist'>
          <li onClick={() => scrollTo(refs.home)}>HOME</li>
          <li>ABOUT</li>
          <li onClick={() => scrollTo(refs.featured)}>FEATURED</li>
          <li onClick={() => scrollTo(refs.events)}>EVENTS</li>
          <li onClick={() => scrollTo(refs.gallery)}>GALLERY</li>
          <li onClick={() => scrollTo(refs.depts)}>DEPARTMENTS</li>
        </ul>
        <button
          id='navicon'
          onClick={() => dropDisplay == 'none' ? setdropDisplay('flex') : setdropDisplay('none')}
        >
          <img 
            src={menu} 
            width='100%'
          />
        </button>
      </div>
      <ul id='navdrop' style={{display:dropDisplay}}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>FEATURED</li>
        <li>GALLERY</li>
        <li>EVENTS</li>
        <li>DEPARTMENTS</li>
      </ul>
    </div>
  )
};

export default Navbar;
