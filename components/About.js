
import Image from "next/image";

export default function About (){
    return (
     

      <div>
        <div className="about-section">
  <h1>About Coast Republic Inc.</h1>
  <p>Established 2023.</p>

</div>

<h2>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="cardie">
<Image src={'/jeff.JPG'} width={300} height={450} alt=""/>
      <div className="containerz">
        <h2>Jeffery Agyepong</h2>
        <p className="title">CEO & Founder</p>
        <p>Dont Believe the hype</p>
        <p>agyepong9jeff@icloud.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

</div>
      </div>
        


   
   
  );
}
