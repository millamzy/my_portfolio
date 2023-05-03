
import { icons } from "react-icons"

import { FaFacebook,FaTwitter,FaInstagramSquare} from "react-icons/fa"
import footer from './footer.css'
function Footer() {

  return (
     
    <div class="containerr footer bg-dark text-light ">
          <p class="text-center">Soical handle</p>
        <div class="row">
            <div class="col-lg-4 mb-3 socialicon">
           
             <h3></h3>
            </div>

            <div class="col-lg-4 mb-3 text-center" >
            <FaInstagramSquare className="icon  mr-5"/>
            <FaFacebook className="icon mr-5 spinner"/>
            
            <a href="#" class="hvr-icon-forward">
            
            <FaTwitter className="icon mr-5 hvr-icon-spin"/>
          </a>
              
            </div>

            <div class="col-lg-4 mb-3">
              
            </div>

        </div>
    </div> 
  
  )
}

export default Footer   