// rafce - reacr arrow function export component+ 

import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Comp1 from './props/Comp1.jsx'

/*
    - Props :
      - props stands for properties.
      - Props are arguments passed into React components.
*/

let name = "Rohit"
let age = 23

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
       */}
       <Comp1 name={name} age={age} />
    </div>
  )
}

export default App
