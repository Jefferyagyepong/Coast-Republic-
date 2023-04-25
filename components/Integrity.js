
import Image from "next/image";


export default function Integrity (){
    return (
     
        <div className="integrity-wrapper">
            <div className="integrity-item">
                <Image src='/delivery.svg' width={20} height={20} alt="" />
                <h4>FREE DELIVERY</h4>
                <p>We offer free delivery to all regions in Ghana</p>
            </div>
              <div className="integrity-item">
                <Image  src='/return.svg' width={20} height={20} alt=""/>
                <h4>Returns</h4>
                <p>No question return and easy refund in 14 days.</p>
            </div>
              <div className="integrity-item">
                <Image  src='/send.svg' width={20} height={20} alt=""/>
                <h4>Contact Us</h4>
                <p>Keep in touch via email and support system.</p>
            </div>
    
</div>                    
   
   
  );
}
