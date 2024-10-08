import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Applyloan from './Pages/Applyloan'
import Elements from './Pages/Elements'
import Blog from './Pages/Blog'
import Blogelement from './Pages/Blogelement'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/applyloan' element={<Applyloan/>}/>
      <Route path='/element' element={<Elements/>}/>
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/singleblog' element={<Blogelement/>}/>
    </Routes>
     
    </>
  )
}

export default App
