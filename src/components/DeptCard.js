/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const DeptCard = ({
  imgsrc,
  title,
  name,
  email,
  blurb
}) => (
  <div class='dept-card'>
    <img src={imgsrc} />
    <h3 style={{fontFamily: 'Poppins'}}>{title}</h3>
    <h4>{name}</h4>
    <h5 style={{color:'#FCBC1A'}}>{email}</h5>
    <p>{blurb}</p>
  </div>
);

export default DeptCard;
