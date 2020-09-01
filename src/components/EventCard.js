import React from 'react'

export default function DeptCard({
  background,
  title,
  text
}) {
  return (
    <div 
      className='event-card' 
      style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(99,255,255,0.3)), url(${background})`}}
    >
      <div 
        className='blur' 
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${background})`}} 
      />
      <div className='event-inner'>
        <h4 
          className='event-text' 
          style={{
            fontFamily:'Poppins', 
            textAlign:'center',
            color:'white',
            textShadow:'2px 2px 5px black'
        }}>{title}</h4>
        <p 
          className='event-text' 
          style={{
            marginTop:'2em',
            color:'white',
            textShadow:'2px 2px 5px black'
        }}>{text}</p>
      </div>
    </div>
  )
};