import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import Image from "next/image";
export default function Thrifts({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="ibrid-box">
      <h3 className="ibrid-heading">THRIFTS ARENA</h3>
      <p className="footer-text">
        Explore thousands of products, new and affordable daily
      </p>

      <div className="arrival-card">
        <Image
          src={
            "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Air Force sneaker"
          width={250}
          height={350}
        />
        <h5>Nike Air Force 1</h5>
        <br />
        <span>$70</span>
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
