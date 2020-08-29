import React from 'react'

export default function DeptCard({
  background,
  title,
  text
}) {
  return (
    <div className='event-card' style={{backgroundImage: `url(${background})`}}>
      <div className='blur' style={{backgroundImage: `url(${background})`}} />
      <div className='inner-white'>
        <h4 style={{
          fontFamily:'Poppins', 
          textAlign:'center'
        }}>{title}</h4>
        <p style={{
          marginTop:'2em'
        }}>{text}</p>
      </div>
      <div className='inner-white-mobile'>
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