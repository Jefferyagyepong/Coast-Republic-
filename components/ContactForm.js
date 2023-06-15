import { faCcMastercard, faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faContactCard } from "@fortawesome/free-regular-svg-icons";
import { faAddressCard, faEnvelope, faInstitution, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";



export default function ContactForm (){
    return (
     

      
      
<div className="form-container">
          <form action="#">
            <div className="rows">
              <div className="col-25">
                    <label htmlFor="fname">First Name</label> 
              </div>
              <div className="col-75">
                <input type="text" name="firstname" id="fname" className="input-area"/>
                
              </div>
         
              
            </div>
            <div className="rows">
              <div className="col-25">
                    <label htmlFor="lname">Last Name</label> 
              </div>
              <div className="col-75">
                <input type="text" name="lastname" id="lname" className="input-area"/>
                
              </div>
         
              
            </div>
              <div className="rows">
              <div className="col-25">
                    <label htmlFor="region">Region</label> 
              </div>
              <div className="col-75">
                <select id="region" name="region">
            <option value="ahafo" className="input-area">Ahafo</option>
            <option value="ashanti">Ashanti</option>
                  <option value="bono">Bono</option>
                  <option value="bono-east">Bono-East</option>
                  <option value="central">Central</option>
                  <option value="eastern">Eastern</option>
                  <option value="greater-accra">Greater Accra</option>
                  <option value="northern">Northern</option>
                  <option value="north-east">North-east</option>
                  <option value="oti">Oti</option>
                  <option value="western-north">Western-North</option>
                  <option value="western">Western</option>
                  <option value="savannah">Savannah</option>
                  <option value="upper-west">Upper-West</option>
                  <option value="upper-east">Upper-East</option>
                   <option value="volta">Volta</option>
                  
           </select>
                
              </div>
         
              
            </div>
                        <div className="rows">
              <div className="col-25">
                    <label htmlFor="subject">Subject</label> 
              </div>
              <div className="col-75">
              <textarea rows="" cols="" id="subject" name="subject" placeholder="write here..." className="input-area"></textarea>
                
              </div>
         
              
            </div>
                   <div className="rows">
            <input type="submit" name="" value="submit" />
         
              
            </div>
            

    
  </form>
        </div>
       
   
   
  );
}
