import { useState } from 'react'
import HomePage from './component/HomePage'
import Navbar from './component/Navbar/Navbar'
import SecondPage from './component/secondPage'
import Thirdframe from './component/Frame5/frame3'
import Sixthframe from './component/Frame6/frame6'
function App() {
  

  return (
   <div>
    <Navbar/>
    <HomePage/>
    <SecondPage/>
    {/* <Thirdframe/> */}
    <Sixthframe / >
   </div>
  )
}

export default App
