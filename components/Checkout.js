import { faCcMastercard, faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faContactCard } from "@fortawesome/free-regular-svg-icons";
import { faAddressCard, faEnvelope, faInstitution, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";



export default function Checkout (){
    return (
     

      
        <div className="rowz">
            <div className="col-85">
                <div className="container-form">
                    <form action="">
                        <div className="rowz">
                            <div className="col-50">
                                <h3>Billing Address</h3>
                                <label htmlFor="fname"><FontAwesomeIcon icon={faUser} width={10} height={10} />Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Nii K. Bortey" />
                                <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} width={10} height={10} />Email</label>
                                <input type="text" name="email" id="email" placeholder="niibortey@gmail.com" />
                                <label htmlFor="adr"><FontAwesomeIcon icon={faAddressCard} width={10} height={10} />Address</label>
                                <input type="text" name="address" id="adr" placeholder="20 Spigel ST, AK-717-4856 Ksi." />
                                <label htmlFor="town"><FontAwesomeIcon icon={faInstitution} width={10} height={10} />Town</label>
                                <input type="text" name="town" id="town" placeholder="Teshie" />

                                <div className="rowz">
                                    <div className="col-50">
                                <label htmlFor="region">Region</label>
                                <input type="text" name="region" id="region" placeholder="Greater Accra" />
                                        
                                    </div>
                                    
                                </div>

                                
                            </div>
                            <div className="col-50">
                                <h3>Payment</h3>
                                <label htmlFor="fname">Accepted Cards</label>
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faCcVisa} style={{ color: "navy" }} width={20} height={20} />
                                    <FontAwesomeIcon icon={faCcMastercard} style={{ color: "red" }} width={20} height={20} />
                                    <FontAwesomeIcon icon={faCcPaypal} style={{ color: "blue" }} width={20} height={20} /><br/>
                                    <label htmlFor="cname">Name on card</label>
                                    <input type="text" name="cardname" id="cname" placeholder="Nii K. Bortey" />
                                    <label htmlFor="ccnum">Credit card number</label>
                                    <input type="text" name="cardnumber" id="ccnum" placeholder="1111-2222-3333-4444" />
                                    <label htmlFor="expmonth">Exp Month</label>
                                    <input type="text" name="expmonth" id="expmonth" placeholder="April" />
                                    <div className="rowz">
                                        <div className="col-50">
                                            <label htmlFor="expyear">Exp Year</label>
                                            <input type="text" name="expyear" id="expyear" placeholder="2022" />
                                            
                                            
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" name="cvv" id="cvv" placeholder="432"/>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>

                                
                            </div>
                            <label className="inline">
                                <input type="checkbox" checked="checked" name="sameadr" /><span >Delivery address same as billing</span>
                            </label>
                            <input type="submit" name="" value="Continue to checkout" className="btn"/>

                            
                        </div>
                        
                    </form>
                    
                </div>
                
            </div>
          
        
    </div>
       
   
   
  );
}
