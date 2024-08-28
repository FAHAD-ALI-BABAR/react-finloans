import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Offer from './Components/Offer/Offer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Offer/>
      
    </>
  )
}

export default App
