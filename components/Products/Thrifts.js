
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import Image from "next/image";
 function Thrifts({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="ibrid-box"><br/><br/>
      <em>
        {" "}
        <h3>THRIFTS ARENA</h3>
      </em><br/><br/>

      <p>Explore thousands of products, new and affordable daily</p>
<br/>
      <div className="ibrid-box">
        <Image
          src={"/products/force1a.JPG"}
          alt="Air Force sneaker"
          width={170}
          height={180}
        />
        <em><br/>
          {" "}
          <h5>Air Force 1 low </h5>
          <h5>$90</h5>
        </em><br/>
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
export default Thrifts;
