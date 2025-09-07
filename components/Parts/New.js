/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
function New() {
  return (
    <div className="ibrid-box">

      <h3>WHATS NEW TODAY </h3>
      <b>
        {" "}
        <span>12</span>
      </b>
      <p>Discover what just landed at Coast Republic</p>

     <Link href="/products/" >Shop Now</Link>

    </div>
  );
}
export default New;
