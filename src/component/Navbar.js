import React from 'react'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav class="navbar  navbar-expand-lg box fixed-top" >
      <div class='container'>
  <a class="navbar-brand" href="#">kingonly</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon modeblack "></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link px-lg-4 rounded big" href="#">Home</a>
      </li>
      
      <li class="nav-item active">
        <a class="nav-link px-lg-4 rounded big" href="#">Register</a>
      </li>
      
      <li class="nav-item active">
        <a class="nav-link px-lg-4 rounded big" href="#">login</a>
      </li>
      
      <li class="nav-item active">
        <a class="nav-link px-lg-4 rounded big" href="#">logout</a>
      </li>

      
      
    </ul>
    
  </div>
  </div>
</nav>
  )
}
