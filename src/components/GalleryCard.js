import React from 'react'

export default function GalleryCard({
  art,
  title
}) {
  return (
    <div className='gallery-card'>
      <div 
        className='gallery-card-art'
        style={{backgroundImage: `url(${art})`}}
      >
      </div>
      <div classname='gallery-card-bar'>
        <span>{title}</span>
      </div>
    </div>
  )
}