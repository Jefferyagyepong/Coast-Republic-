
import Image from "next/image";
import Link from 'next/link';





export default function CategoryCard() {
    const CategoryCard = ({ img, name }) => {
    return (
       <div className='card'>
            <Image src='/azumah-white.svg' width={350} height={350} alt="Azumah Nelson T-shirt White"  className="productImg"/>
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className='info'>
          <h3>{name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
                       
   
   
  );
    }
       }

   
