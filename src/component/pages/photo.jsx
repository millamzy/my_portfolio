import React from 'react'
import './photo.css'

function photo() {
  return (
    <section class="photo py-5">
        <div class="container text-center py-5">
            <h1 class="text-center pb-5 "> SERVICES</h1>
                        <div class="control rounded">
                            <ul>
                            <li class="button" data-filter="MY APP">FILTER</li>
                                <li class="button" data-filter="MY APP">MY APP</li>
                                <li class="button" data-filter="GRAPHICS" >GRAPHICS</li>
                                <li class="button" data-filter="FIGMA DESIGN" >FIGMA DESIGN</li>
                            </ul>
                        </div>
                <div class="row pt-3">
                  <div class="col-lg-4">
                      <div class="item">
                          <img src='./aj.PNG' class="img-fluid rounded Filter MY APP GRAPHICS " alt=""></img>
                          <span><i class="fas fa-plus" data-toggle="modal" data-target="#photomodal"></i></span>
                      </div>
                  </div>  

                  <div class="col-lg-4">
                      <div class="item">
                          <img src='./d1.JPG' class="img-fluid rounded filter MY APP GRAPHICS FIGMA DESIGN" alt="" style={{ width: "92%", height: "auto" }}></img>
                          <span><i class="fas fa-plus" data-toggle="modal" data-target="#photomodal"></i></span>
                      </div>
                  </div>  

                  <div class="col-lg-4">
                      <div class="item">
                          <img src='./d2.JPG' class="img-fluid rounded MY APP GRAPHICS FIGMA DESIGN " alt=""></img>
                          <span><i class="fas fa-plus" data-toggle="modal" data-target="#photomodal"></i></span>
                      </div>
                  </div>  

                </div>
        </div>


        <div class="photo-modal modal fade mt-5 " id="photomodal" aria-hidden="true" role='dialog'>
            <div class="modal-dialog modal-md " role="document">
                <div class="modal-content text-center">
                    <div class="modal-body text-center">
                      <div class= "container-fluid py-3"> 
                            <div class="row justify-content-center">
                                <div class="col-lg-12">
                                    <img src='./mi.jpg' class="img-fluid rounded" ait=""></img>
                                </div>
                            </div>
                        </div>     
                     </div>

                </div>
            </div>
        </div>
    </section>    
    

    
  )
}

export default photo