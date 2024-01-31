import Image from "next/image";
import Link from "next/link";
export default function FlashSale() {
  return (
    <div className="flash-flex-box ibrid-box">
      <div className="flash-flex">
        <h3 className="ibrid-heading">Flash Sale</h3>
      </div>

      <div className="collection-cards arrival-card-brown">
        <span>Up to 30% Off!</span>
        <br />
        <span>Sale End in:</span>
        <div className="time-box">
          <div className="time-item-groove">
            <h6 className="time-item-color">1</h6>
            <span>Hrs</span>
          </div>
          <div className="time-item-groove">
            <h6 className="time-item-color">34</h6>
            <span>Mins</span>
          </div>
          <div className="time-item-groove">
            <h6 className="time-item-color">27</h6>
            <span>Sec</span>
          </div>
        </div>
      </div>
      <div className="flash-card collection-card">
        <Image
          src={
            ""
          }
          width={280}
          height={300}
          alt="product"
        />
        <h4 className="ibrid-heading">Dell Laptop</h4>
        <div>
          <del>$300</del> - <span>$210</span>
        </div>

        <br />
        <label for="status">Available:10 - Sold: 5</label>

        <br />
        <progress value={5} max={10}>
          only 5 left
        </progress>
      </div>
    </div>
  );
}
