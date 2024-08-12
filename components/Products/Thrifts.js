
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import Image from "next/image";
export default function Thrifts({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="ibrid-box">
      <h3>THRIFTS ARENA</h3>
      <p>
        Explore thousands of products, new and affordable daily
      </p>

      <div className="ibrid-box">
        <Image
          src={
            "/products/force1a.JPG"
          }
          alt="Air Force sneaker"
          width={170}
          height={180}
        />
        <h5>Air Force 1 low </h5>
        
        <h5>$90</h5>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="add-to-cart"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}
