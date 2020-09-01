import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function Slide({
  items
}) {
  return (
    <Carousel>
      {items.map((item,n) => (
        <Carousel.Item 
          key={`item-${n}`}
          style={{
            width:'60%', 
            marginLeft:'20%'
          }}
        >
          <div>
            <img
              className="d-block w-100"
              src={item.imgsrc}
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}