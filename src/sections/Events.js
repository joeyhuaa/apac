import React from 'react'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import EventCard from '../components/EventCard'

import art from '../img/art.jpg'
import mural from '../img/mural.jpg'

export default function Events() {
  return (
    <Container fluid id='events'>
      <h1 style={{fontFamily:'Poppins semibold', marginBottom:'2em'}}>Upcoming Events</h1>
      <Row>
        <Col>
          <EventCard
            background={art}
            title='Art Show'
            text='lorem ipsum'
          />
        </Col>
        <Col>
          <EventCard 
            background={mural}
            title='Mural Painting'
            text='lorem ipsum'
          />
        </Col>
      </Row>
    </Container>
  )
}