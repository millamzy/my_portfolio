import React from 'react'
import "./About.css"

function About() {
  return (
    <section class="about py-5 ">
        <div class="container py-5 ">
            <div class="row">
                <div className="col-lg-5">
                    <img src='./mii.jpg' class="img-fluid" alt=""></img>
                </div>
                <div className="col-lg-7 pt-3">
                <h1>About Me</h1>
                <p>Web Designer & Graphics Designer</p>
                <p> i am <span class="font-weight-bold"> Ndefo Agozilim</span> and i am a frontend deverloper.As an experienced Frontend Developer, I am passionate about building exceptional web experiences that meet both user and business needs. With a solid background in HTML, CSS, JavaScript, and front-end frameworks such as React and Angular, I have been able to deliver engaging and responsive websites and applications for a variety of clients.

                    My attention to detail, creativity, and problem-solving skills have allowed me to contribute to the success of numerous projects, from concept to deployment. Additionally, I am committed to keeping up-to-date with the latest web development trends and technologies, ensuring that my skills and knowledge are always up-to-date.

                </p>
            
            <div class="progress">
              <div class="pro-value1">
                <p>HTML/CSS<span text-white float-right> 95%</span></p>
              </div>
            </div>

            <div class="progress my-3">
              <div class="pro-value2">
                <p>JAVASCRIPT<span text-white float-right> 90%</span></p>
              </div>
            </div>

            <div class="progress">
              <div class="pro-value3">
                <p>BOOTSTRAP<span text-white float-right> 85%</span></p>
              </div>
            </div>

            <div class="progress my-3">
              <div class="pro-value4">
                <p>REACT.JS/Redux<span text-white float-right> 75%</span></p>
              </div>
            </div>

            <div class="progress my-3">
              <div class="pro-value5">
                <p>NODELS<span text-white float-right> 85%</span></p>
              </div>
            </div>

          <input type="button" class="btn1 mt-1" value="Download CV"/>
          <input type="button" class="btn2 mt-1" value="Contact Us"/>
          
            </div>    
            </div>
        </div>
    </section>
  )
}

export default About