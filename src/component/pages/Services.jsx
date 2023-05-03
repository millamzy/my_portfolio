import React from 'react'
import "./Services.css"

function Services() {
  return (
    <section class="services py-5  ">
        <div class="container py-5 ">
            <h1 class="text-center pb-5 ">APPLICATIONS</h1>
            <div class="row pb-3 bb ">
               <div class="col-lg-4 mb-3">
                <div class="card text-center px-2 py-5">
                    <img class="card-img-top  " src="./Capture.PNG"  alt="Card image cap"/>
                      <div class="card-body">
                          <h5 class="card-title text-primary">kingsshop</h5>
                              <a href="https://react-redux-tutorial-master.vercel.app/" class="btn btn-primary">click here</a>
                      </div>
                </div>
               </div>

               <div class="col-lg-4 mb-3">
               <div class="NEW text-center px-3 py-3">
  <div class="imgBox">
    <img src="./mi.PNG" alt=""/>
  </div>
  <div class="details">
    <h2></h2>
    <h1> I AM ALSO A GRAPHIC DESIGNER</h1>
  </div>
</div>
               </div>

               <div class="col-lg-4 mb-3">
                <div class="card text-center px-3 py-">
                    <img class="card-img-top" width="auto" height="260" src="./style.PNG" alt="Card image cap"/>
                      <div class="card-body">
                          <h5 class="card-title text-primary">Movie App</h5>
                              <a href="style-video-git-master-millamzy.vercel.app" class="btn btn-primary">click here</a>
                      </div>
                </div>
               </div>

               


            </div>
        </div>
    </section>
  )
}

export default Services