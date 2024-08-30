import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Offer from './Components/Offer/Offer'
import Choose from './Components/Choose/Choose'
import Work from './Components/Work/Work'
import Accordian from './Components/Accordian/Accordian'
import Testimonial from './Components/Testimonial/Testimonial'
import Apply from './Components/Apply/Apply'
import Footer from './Components/Footer/Footer'
import Header1 from './Components/Header1/Header1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Offer/>
     <Choose/>
      <Work/>
      <Accordian/>
      <Testimonial/>
      <Apply/>
      <Footer/>
    </>
  )
}

export default App
