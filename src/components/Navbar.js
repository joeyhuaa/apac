/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import logo from '../img/logo.png'
import '../../src/App.css'

const Navbar = () => (
  <div id='nav'>
    <img src={logo} width="15%" />
    <ul style={{
      display:'flex', 
      listStyle:'none', 
      justifyContent:'space-between',
      alignItems:'center',
      width:'60%'
    }}>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>GALLERY</li>
      <li>EVENTS</li>
      <li>DEPARTMENTS</li>
      <li>CONTACT</li>
    </ul>
  </div>
);

export default Navbar;
