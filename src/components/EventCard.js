import React from 'react'

export default function DeptCard({
  background,
  title,
  text
}) {
  return (
    <div className='event-card' style={{backgroundImage: `url(${background})`}}>
      <div className='blur' style={{backgroundImage: `url(${background})`}} />
      <div className='event-inner'>
        <h4 style={{
          fontFamily:'Poppins', 
          textAlign:'center'
        }}>{title}</h4>
        <p style={{
          marginTop:'2em'
        }}>{text}</p>
      </div>
      <div className='event-inner-mobile'>
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