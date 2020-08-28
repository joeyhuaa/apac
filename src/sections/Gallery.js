import React from 'react'
import GalleryCard from '../components/GalleryCard'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

import pic1 from '../img/pic1.jpg'
import pic2 from '../img/pic2.jpg'
import pic3 from '../img/pic3.jpg'
import pic4 from '../img/pic4.jpg'
import pic5 from '../img/pic5.jpg'
import pic6 from '../img/pic6.jpg'

let cards = [
  {
    art:pic1,
    title:'TITLE'
  },
  {
    art:pic2,
    title:'TITLE'
  },
  {
    art:pic3,
    title:'TITLE'
  },
  {
    art:pic4,
    title:'TITLE'
  },
  {
    art:pic5,
    title:'TITLE'
  },
  {
    art:pic6,
    title:'TITLE'
  }
]

export default function Gallery() {
  return (
    <Container fluid id='gallery'>
      <h1 style={{fontFamily:'Poppins semibold', marginBottom:'2em'}}>Gallery</h1>
      <Row>
        {cards.map(card => 
          <Col sm={12} lg={4}>
            <GalleryCard
              art={card.art}
              title={card.title}
            />
          </Col>
        )}
      </Row>
    </Container>
  )
}