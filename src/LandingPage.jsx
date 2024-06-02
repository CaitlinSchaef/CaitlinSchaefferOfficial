import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import './Main.css'

const Title = () => {
  return (
    <Container className="">
      <Row className="justify-content-md-center">
      <Col xs={12} md={8} className="d-flex flex-column justify-content-between mb-3 text-center">
        <h1 className="text-center display-1 mt-5">
          <em>CAITLIN SCHAEFFER</em>
        </h1>
        </Col>
      </Row>
    </Container>
  )
}

function LandingPage() {
  return (
    // This is the parent
    <div 
      className="h-100 p-5"
      style={{ color: 'white' }}
    >
  
      <Title />
    </div>
    // This is the end of the parent div
  )
}


export default LandingPage
