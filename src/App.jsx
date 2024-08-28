import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Offer from './Components/Offer/Offer'
import Choose from './Components/Choose/Choose'
import Work from './Components/Work/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Offer/>
     <Choose/>
      <Work/>
    </>
  )
}

export default App
