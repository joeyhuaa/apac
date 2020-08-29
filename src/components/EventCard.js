import React from 'react'

export default function DeptCard({
  background,
  title,
  text
}) {
  return (
    <div 
      className='event-card'
      style={{backgroundImage: `url(${background})`}}
    >
      <div className='inner-white translucent'>
        <h4 style={{
          fontFamily:'Poppins', 
          textAlign:'center'
        }}>{title}</h4>
        <p style={{
          marginTop:'2em'
        }}>{text}</p>
      </div>
    </div>
  )
};