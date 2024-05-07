
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
        <Col xs={12} md={8} className="d-flex flex-column justify-content-between mb-3 text-center aboutBody">
              <h1><strong>Blog:</strong></h1>
                
        </Col>
      </Row>
    </Container>
  {/* </div> */}
</ThemeProvider>
  )
}



function Blog() {
  return (
    <div className="p-5">
      <Body />
    </div>
  )
}


export default Blog