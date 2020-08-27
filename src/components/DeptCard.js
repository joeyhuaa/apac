/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React, {useState} from "react";

let DeptCard = ({
  imgsrc,
  title,
  name,
  email,
  blurb
}) => {
  let [text, setText] = useState(() => blurb.split(' ').slice(0,35).join(' ') + '...')

  return (
    <div 
      className='dept-card' 
      onMouseOver={() => setText(blurb)}
      onMouseLeave={() => setText(blurb.split(' ').slice(0,30).join(' ') + '...')}
    >
      <img src={imgsrc} />
      <h4 style={{fontFamily: 'Poppins'}}>{title}</h4>
      <h5>{name}</h5>
      <h6 style={{color:'#FCBC1A'}}>{email}</h6>
      <p>{text}</p>
    </div>
  )
};

export default DeptCard;
