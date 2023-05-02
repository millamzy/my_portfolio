
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
            <FaFacebook className="icon mr-5"/>
            <FaTwitter className="icon mr-5"/>
            <FaInstagramSquare className="icon  mr-5"/>
              
            </div>

            <div class="col-lg-4 mb-3">
              <h4></h4>
            </div>

        </div>
    </div> 
  
  )
}

export default Footer   