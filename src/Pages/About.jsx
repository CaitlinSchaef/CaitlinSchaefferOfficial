
import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fuji from '../assets/fuji-uncut.jpeg'
import Uni from '../assets/university.jpeg'
import Berlin from '../assets/berlinEdit.jpeg'
import { GiFuji } from "react-icons/gi"

const Body = () => {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
    minBreakpoint="xs"
    >
    {/* <div> */}
    <Container className="">
      <Row className="justify-content-md-center">
        {/* Putting the class name for CSS on the column is what allows for customization of the text background
        had to make xs=12 so that it was full width on the smallest screen */}
        <Col xs={12} md={8} className="overflow-scroll d-flex flex-column justify-content-between mb-3 text-center aboutBody" style={{height: "75vh"}}>
              <h1><strong>Get to know me:</strong></h1>
                <p className="">
                If I needed to boil myself down to a few words, I would feel content with: <br></br>
                traveler, thinker, reader, and gourmet. 
                <br></br>
                I love seeing new places, and experiencing new cultures (as well as all of the planning and thought that goes into it). 
                I'm a researcher at heart, and learning about the places before I visit them, as well as trying to learn a passable amount 
                of whatever language is spoken makes trips even more fun. Japan is probably my favorite place I've visted
                so far, though Scotland was also simply amazing. 
                <br></br>
                Before beginning my career in Web Development with the AwesomeInc Bootcamp, I was pursuing my second Masters degree, 
                this one in Classics, planning to go on to a PhD with the ultimate goal being a college professor. My experiences in higher education, 
                and the overall state of the Humanities led me to a shift in my perspectives on the kind of things I wanted to be doing every day for my career. 
                I will always love learning, and will hopefully keep up on my Ancient Greek and Latin, but the field of Web and Software Development unlocks so many opportunities. 
                Opportunities to problem solve, to exist in a constantly changing field, and to learn a completely new discipline.  
                <br></br>
                Reading has been the only consistent hobby I've had in life, and I have read voraciously since I was very young. Spending so many years in academics meant I was often reading for school, so journal articles and texts have always been very interesting to me. Fiction is my favorite genre to read, and I love fantasy and sci-fi, as well as mystery.  <br></br>
                I love food that tastes good, and I love making food that tastes good. I am always down to try anything once, though my spice tolerance does border on abysmal.
                <br className="my-3" />
                <img
                alt="Tokyo Shrine"
                src={Fuji}
                width="200"
                height="auto"
                className="d-inline-block align-top mt-2 me-2"
                />
                <img
                alt="University of Edinburgh"
                src={Uni}
                width="200"
                height="auto"
                className="d-inline-block align-top mt-2 me-2"
                />
                <img
                alt="Berlin"
                src={Berlin}
                width="200"
                height="auto"
                className="d-inline-block align-top mt-2 me-2"
                />
            </p>
        </Col>
      </Row>
    </Container>
  {/* </div> */}
</ThemeProvider>
  )
}



function About() {
  return (
    <div className="p-5">
      <Body />
    </div>
  )
}


export default About