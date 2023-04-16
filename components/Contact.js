


export default function Contact (){
    return (
     
 
    <div className="terms-wrap1">
      <h4>CONTACT US</h4>
      <p className="delivery-text">
        IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO REACH OUT VIA EMAIL. WE
        WILL GET BACK TO YOU AS SOON AS WE CAN WE WOULD ALSO LOVE TO HEAR FROM
        YOUR FEEDBACK, PLEASE LET US KNOW HOW WE CAN IMPROVE
        Support@coastrepulic.com INSTAGRAM.COM/COASTREPUBLIC THANK YOU FOR
        SHOPPING WITH US!
      </p>
  


      <form method="post" name="myForm" id="form-wrapper">
        <input type="text" name="Name" placeholder="Name" className="form-input" required />

        <input type="email" name="Email" placeholder="Email"  className="form-input"  required/>

        <input type="tel" name="Number" placeholder="Phone Number"  className="form-input"  required/>

        <textarea name="Message" placeholder="Message" rows={15} ></textarea>

        <input type="submit" value="Send" />
      </form>
            </div>
         
       
   
   
  );
}
