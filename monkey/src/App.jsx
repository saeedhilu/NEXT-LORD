import { useState } from 'react'
import HomePage from './component/HomePage'
import Navbar from './component/Navbar/Navbar'
import SecondPage from './component/secondPage'
function App() {
  

  return (
   <div>
    <Navbar/>
    <HomePage/>
    <SecondPage/>
   </div>
  )
}

export default App
