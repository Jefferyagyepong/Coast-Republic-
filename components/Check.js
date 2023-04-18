import { faCcMastercard, faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faContactCard } from "@fortawesome/free-regular-svg-icons";
import { faAddressCard, faEnvelope, faInstitution, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";



export default function Check (){
    return (
     

      
        <div className="collection">
            <Link href={"/cart"}>
                <span>View cart and checkout</span>
            </Link>

     
    </div>
       
   
   
  );
}
