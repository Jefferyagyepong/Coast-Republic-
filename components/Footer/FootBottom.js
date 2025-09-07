/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from "next/link";
function FootBottom() {
  return (
    <div className="ibrid-box">
      <div className="payment-container">
        <ul className="list-inline">
          <li>
            {" "}
            <Link href={"/privacy"} className="footer-tag">
              {" "}
              Privacy
            </Link>{" "}
          </li>
          |
          <li>
            {" "}
            <Link href={"/terms"} className="footer-tag">
              {" "}
              Terms
            </Link>
          </li>
        </ul>
      </div>
      <em>
        <br /> <h6 className="footer-tag">Powered by Paystack</h6>
      </em>{" "}
      <br />
    </div>
  );
}
export default FootBottom;
