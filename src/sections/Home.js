import React, {useEffect, useRef} from 'react'
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

export default function Home({setRef}) {
  return (
    <div id='home' ref={setRef.home}>
      <div id='home-heading'>
        <p className='home-text' style={{fontSize:'60px'}}>Aggie Public Arts Committee</p>
        <p className='home-text' style={{fontSize:'40px'}}>UC Davis</p>
      </div>
      <div id='home-features' ref={setRef.featured}>
        <h4>Features of the Month</h4>
        <Features
          items={features}
        />
      </div>
    </div>
  )
}