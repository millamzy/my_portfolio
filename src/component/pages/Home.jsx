import React from 'react'
import Boddy from '../Boddy'
import Main from '../Main'
import About from './About'
import Services from './Services'
import Photo from './Photo'



function Home() {
  return (
    <div>
   <Main/>
    <Boddy/>
    <About/>
    <Services/>
    <Photo/>
    </div>
  )
}

export default Home