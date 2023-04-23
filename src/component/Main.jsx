import React from 'react'
import './Main.css'

function Main() {
  return (
     
    <div class="container py-5">
        <div class="row bob py-3">
              <div class="col-md-6 ">
             <h3 className='hello'><small>Hello, I am</small><br></br></h3>
             <h6 className='head'>Ndefo</h6>
             <p className='hello2 pt-3'>I am a frontend developer</p>
             <input type="button" class="btn1 mt-1" value="My work"/>
          <input type="button" class="btn2 mt-1" value="Hire Me"/>
              </div>
              <div class="col-md-6  " >
              < img src="aj.PNG" class="img-fluid"/> 
              </div>
        </div> 
    </div> 
  
  )
}

export default Main   