import React, {useState, useEffect} from "react";

export default function DeptCard({
  imgsrc,
  title,
  name,
  email,
  blurb,
}) {
  return (
    <div className='dept-card'>
      <img src={imgsrc} />
      <h4 style={{fontFamily: 'Poppins'}}>{title}</h4>
      <h5>{name}</h5>
      <h6 style={{color:'#FCBC1A'}}>{email}</h6>
      <textarea readOnly value={blurb} />
    </div>
  )
};
