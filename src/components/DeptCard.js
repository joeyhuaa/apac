import React, {useState, useEffect} from "react";

export default function DeptCard({
  imgsrc,
  title,
  name,
  email,
  blurb,
}) {
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
      <textarea>{blurb}</textarea>
    </div>
  )
};
