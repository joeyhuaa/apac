/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React,{useState, useEffect} from "react";
import logo from '../img/logo.png'
import '../../src/App.css'
import menu from '../img/menu.png'

const Navbar = () => {
  let [dropDisplay, setdropDisplay] = useState('none')  
  window.addEventListener('resize', () => {if (window.innerWidth >= 900) setdropDisplay('none')})
  return (
    <div>
      <div id='nav'>
        <img id='logo' src={logo} width="12%" />
        <ul id='navlist'>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>GALLERY</li>
          <li>EVENTS</li>
          <li>DEPARTMENTS</li>
          <li>CONTACT</li>
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
        <li>GALLERY</li>
        <li>EVENTS</li>
        <li>DEPARTMENTS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  )
};

export default Navbar;
