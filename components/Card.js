
import Image from "next/image";
import Link from "next/link";



const Card = ({ product }) => {
   

  return (
    <div>
      <div>
        <div>
          <div></div>

          <div></div>

          <div>
            <div class="relative">
              <Image src={product.image} alt="" width={200} height={150} />
            </div>

            <div>
              <Link href={`/Productdetails/${product._id}`}>
                <div>{product.title}</div>
              </Link>

              <div>
                <div> ${product.price}k</div>

                <div>
                  <div> 
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;