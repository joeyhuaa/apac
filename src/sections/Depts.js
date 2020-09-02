import React from 'react'
import DeptCard from '../components/DeptCard'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

let cards = [
  {
    title:'DIRECTOR',
    name:'Kinu Koide',
    email:'kzkoide@ucdavis.edu',
    blurb:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.'
  },
  {
    title:'MARKETING',
    name:'Gennifer Hom',
    email:'grhom@ucdavis.edu',
    blurb:'Hello! My name is Gennifer Hom and I have strong interests in the arts which is why I decided to be a part of APAC. My interests started in high school where I studied fine arts and eventually grew interests in UI/UX design and Graphic design. I want to help contribute to the APAC group and create a platform where all arts can be welcomed and appreciated on campus.'
  },
  {
    title:'SOCIAL MEDIA',
    name:'Laura Yien',
    email:'lnyien@ucdavis.edu',
    blurb:'Hello! I’m a second-year design major from the Bay Area. I became a part of APAC because I’m passionate about sharing meaningful work with others and highlighting artists in our community. My artistic roots are in traditional fine art, and I especially love painting and anything abstract or experimental!'
  },
  {
    title:'OUTREACH',
    name:'Natalie Lauerman',
    email:'nllauerman@ucdavis.edu',
    blurb:'Hello! I am a third-year Sustainable Environmental Design major from San Diego and my favorite art medium is ceramics. I joined APAC because I am passionate about art and outreach and wanted to be more involved at Davis; this committee is a great opportunity to leave a lasting impact on the Davis community and bring attention to important issues in a new and creative way.'
  },
  {
    title:'OUTREACH',
    name:'Lucas Weiser',
    email:'lbwieser@ucdavis.edu',
    blurb:"Hello! I'm Lucas and I joined the APAC because I want to share relevant social messages within our community. By sharing these messages through public works of art we can  inform our community, and make it more beautiful at the same time. I like to work with many different types of art, including print, painting, and making music."
  },
  {
    title:'ART SHOWS',
    name:'Mickey Sanchez',
    email:'micsanchez@ucdavis.edu',
    blurb:'Hello! I’m a third-year double major in Psychology and Art History. I joined APAC because I wanted to be part of a group that supports student artists and their endeavors. As the Art Show director, my job is to ensure a platform for Davis student artists to showcase their talents, progress, and work. My favorite medium is photography! Currently, I have been working with my 35mm film camera and disposables camera.'
  }
]

export default function Depts({setRef}) {
  return (
    <div id='depts' ref={setRef}>
      <Container fluid>
        <h1 style={{fontFamily:'Poppins', marginBottom:'2em'}}>Our Departments</h1>
        <Row>
          {cards.map((card,n) => 
            <Col sm={12} lg={4} key={`col-${n}`}>
              <DeptCard
                title={card.title}
                name={card.name}
                email={card.email}
                blurb={card.blurb}
              />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}