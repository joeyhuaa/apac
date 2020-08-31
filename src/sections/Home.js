import React from 'react'
import Features from '../components/Slide'

import f1 from '../img/features1.png'
import f2 from '../img/features2.png'
import f3 from '../img/features3.png'

let features = [
  {
    imgsrc:f1,
  },
  {
    imgsrc:f2,
  },
  {
    imgsrc:f3,
  }
]

export default function Home() {
  return (
    <div id='home'>
      <div id='home-heading'>
        <p style={{fontSize:'50px'}}>Welcome to</p>
        <p style={{fontSize:'80px'}}>APAC</p>
        <p style={{fontSize:'50px'}}>Aggie Public Arts Committee</p>
      </div>
      <div id='home-features'>
        <h4>Features of the Month</h4>
        <Features
          items={features}
        />
      </div>
    </div>
  )
}