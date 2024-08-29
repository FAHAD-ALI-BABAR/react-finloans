import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Offer from './Components/Offer/Offer'
import Choose from './Components/Choose/Choose'
import Work from './Components/Work/Work'
import Accordian from './Components/Accordian/Accordian'
import Testimonial from './Components/Testimonial/Testimonial'

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
    </>
  )
}

export default App
