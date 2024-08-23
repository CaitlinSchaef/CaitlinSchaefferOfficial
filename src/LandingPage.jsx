import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import './Main.css'

const Title = () => {
  return (
    <Container className="" style={{ paddingTop: '15vh' }}>
      <Row className="justify-content-md-center">
      <Col xs={12} md={8} className="d-flex flex-column justify-content-center text-center">
        <Link to='/About'>
            <h1 className="display-1">
              CAITLIN <span>SCHAEFFER</span>
            </h1>
        </Link>
        </Col>
      </Row>
      <Row className="link-row"> {/* Center the row */}
        <Col className="link-col"> {/* Center each column */}
          <Link to='/Portfolio'>
            <h4>Portfolio</h4>
          </Link>
        </Col>
        <Col className="link-col"> {/* Center each column */}
          <Link to='/Contact'>
            <h4>Contact</h4>
          </Link>
        </Col>
        <Col className="link-col"> {/* Center each column */}
          <Link to='/About'>
            <h4>About</h4>
          </Link>
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
