
import { Link } from "react-router-dom"
import { useState } from "react"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Content_Array from "./Blog-Content"
import { Button } from "react-bootstrap"



const BlogDisplay = ({ content }) => {
  const mostRecent = content[0]
  return (
    <div>
      <h2 className="CurrentTitle"> {mostRecent.title} </h2>
      <h5 className="CurrentDate">{mostRecent.date} </h5>
      <p className="CurrentContent overflow-scroll" style={{height: "65vh"}}> {mostRecent.content} </p>
    </div>
  )
}

// back Button
// index + 1
// next Button
// index -1
// it feels backwards, but since the most recent index is 0, to go back in time we need to add and to bring it back to the
// present we need to subtract

const Body = () => {
  const [content, setContent] = useState(Content_Array);
  const [contentIndex, setContentIndex] = useState(0);
  //do we need to make a useEffect for rendering?

  const handleNext = () => {
    setContentIndex((prevIndex) => (prevIndex < content.length - 1 ? prevIndex + 1 : prevIndex) )
  }
  const handleBack = () => {
    setContentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
  }
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
                <div>
                  <BlogDisplay content={content} />
                  <Button className="myButton" onClick={handleBack} disable={contentIndex === 0}>Previous</Button>
                  <Button className="myButton" onClick={handleNext} disable={contentIndex === content.length - 1}>Next</Button>
                </div>
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