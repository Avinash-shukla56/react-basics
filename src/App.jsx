// rafce - reacr arrow function export component+ 

import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Comp1 from './props/Comp1.jsx'
import UseState from "./UseState/UseState.jsx"
import UseEffect from "./UseEffect/UseEffect.jsx"
import UseEffect1 from "./UseEffect/UseEffect1.jsx"

/*
    - Props :
      - props stands for properties.
      - Props are arguments passed into React components.

    - GIT COMMANDS
      1. git add .
      2. git commit -m "update"
      3. git push
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
       {/* <Comp1 name={name} age={age} /> */}

       {/* <UseState /> */}
       {/* <UseEffect /> */}
       <UseEffect1 />
    </div>
  )
}

export default App
