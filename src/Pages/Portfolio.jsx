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
import { TbBrandDjango } from "react-icons/tb";
import { SiSqlite } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { FaFly } from "react-icons/fa6";
import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

//portfolio image imports
import ToDo from '../assets/Portfolio/ToDoShot.png'
import Menu from '../assets/Portfolio/FullScreenMenu.png'
import Intermediate from '../assets/Portfolio/IntermediateReactPract.png'
import TicTacToe from '../assets/Portfolio/TicTacToeMedDemo.png'
import WeatherApp from '../assets/Portfolio/WeatherAppProject.png'

const ChildA = () => {
    return (
        <a
        className="masonryImage"
        href="https://react-to-do-list-project-pied.vercel.app/"
        >
            <img
                width="250"
                height="auto"
                alt="ToDo List Project"
                src={ToDo}
            />
        </a>
    )
    }

const ChildB = () => {
    return (
        <a
        className="masonryImage"
        href="https://random-restaurant-uuj8.vercel.app/"
        >
            <img
                width="300"
                height="auto"
                alt="Random Restaurant Project"
                src={Menu}
            />
        </a>
    )
    }

const ChildC = () => {
    return (
        <a
        className="masonryImage"
        href="https://intermediate-react-practice.vercel.app/"
        >
            <img
                width="250"
                height="auto"
                alt="Intermediate React Practice"
                src={Intermediate}
            />
        </a>
    )
    }

const ChildD = () => {
    return (
        <a
        className="masonryImage"
        href="https://caitlinschaef.github.io/tic-tac-toe/"
        >
            <img
                width="300"
                height="auto"
                alt="TicTacToe Project"
                src={TicTacToe}
            />
        </a>
    )
    }

const ChildE = () => {
    return (
        <a
        className="masonryImage"
        href="https://caitlinschaef.github.io/weather-app/"
        >
            <img
                width="250"
                height="auto"
                alt="Weather App Project"
                src={WeatherApp}
            />
        </a>
    )
    }

function MyWrapper() {
        return (
            <ResponsiveMasonry
                className="overflow-scroll" style={{height: "65vh"}}
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    <ChildA />
                    <ChildB />
                    <ChildE />
                    <ChildC />
                    <ChildD />
                </Masonry>
            </ResponsiveMasonry>
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
                    <a
                    className="iconReact"
                    >
                        <SiSqlite />
                    </a>
                    <a
                    className="iconReact"
                    >
                        <TbBrandDjango />
                    </a>
                    <a
                    className="iconReact"
                    >
                        <TbBrandVercel />
                    </a>
                    <a
                    className="iconReact"
                    >
                        <FaFly />
                    </a>
                    </span>
                            {MyWrapper()}
                            
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