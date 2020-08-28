import React from 'react'
import heart from '../img/heart.png'

export default function GalleryCard({
  art,
  title
}) {
  return (
    <div className='gallery-card'>
      <div 
        className='gallery-card-art'
        style={{backgroundImage: `url(${art})`}}
      />
      <div className='gallery-card-bar'>
        <span>{title}</span>
        <img src={heart} width='7%' />
      </div>
    </div>
  )
}