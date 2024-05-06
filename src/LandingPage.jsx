import { Link } from "react-router-dom"
import './Main.css'

const Title = () => {
  return (
    
    <h1 className="text-center display-1">
    <br></br>
      <em>CAITLIN SCHAEFFER</em>
    </h1>
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
