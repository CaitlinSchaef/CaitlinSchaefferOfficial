import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

//portfolio image imports

const ChildA = () => {
    return (
        <a
        className="masonryImage"
        href="https://github.com/CaitlinSchaef"
        >
            <img
                alt="Headshot"
                src={Headshot}
                className="text-center"
            />
        </a>
    )
    }


const Body = () => {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
    minBreakpoint="xs"
    >
        <Container className="mt-3">
            <Row className="justify-content-md-center">
                {/* Putting the class name for CSS on the column is what allows for customization of the text background
                had to make xs=12 so that it was full width on the smallest screen */}
                <Col xs={12} md={8} className="d-flex flex-column justify-content-between mb-3 text-center aboutBody">
                    <h1><strong>Portfolio:</strong></h1>
                    <span>
                    <a
                    className="iconReact"
                    >
                        <FaHtml5 />
                    </a>
                    <a
                    className="iconReact"
                    >
                        <FaCss3Alt />
                    </a>
                    <a
                    className="iconReact"
                    >
                        <FaBootstrap />
                    </a>
                    <a
                    className="iconReact"
                    >
                        <TbBrandJavascript />
                    </a>
                    <a
                    className="iconReact"
                    >
                        <FaReact />
                    </a>
                    <a
                    className="iconReact"
                    >
                        <FaPython />
                    </a>
                    </span>
                        <p className="overflow-scroll" style={{height: "65vh"}}>
                            This is my portfolio
                        </p>
                </Col>
            </Row>
        </Container>
    </ThemeProvider>
  )
}

function Portfolio(){
    return (
        <Body />
    )
}

export default Portfolio

/* Notes:
https://getbootstrap.com/docs/5.2/helpers/stretched-link/
This will make stuff clickable

https://www.npmjs.com/package/react-responsive-masonry
This is about an up to date responsive masonry you can install with NPM, if you do this put it in the read me
*/