import React from 'react'
import Main from '../Main'
import About from './About'
import Services from './Services'
import photo from './Photo'
import footer from'./footer'



function Home() {
  return (
    <div>
   <Main/>
    <About/>
    <Services/>
    <photo/>
    <footer/>
    </div>
  )
}

export default Home