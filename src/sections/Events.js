import React from 'react'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import EventCard from '../components/EventCard'

import bg1 from '../img/art.jpg'
import bg2 from '../img/mural.jpg'

let events = [
  {
    title:'Art Show',
    background:bg1,
    text:'We will be holding an online art show in which we will take submissions from UC Davis students and post them on our website and our Instagram page!'
  },
  {
    title:'Mural Painting',
    background:bg2,
    text:'We will be having a mural painting event in coordination with the Native American Student Union (NASU).'
  }
]

export default function Events() {
  return (
    <Container fluid id='events'>
      <h1 style={{fontFamily:'Poppins', marginBottom:'2em'}}>Upcoming Events</h1>
      <Row>
        {events.map(event => 
          <Col sm={12} lg={6}>
            <EventCard
              background={event.background}
              title={event.title}
              text={event.text}
            />
          </Col>
        )}
      </Row>
    </Container>
  )
}