import Image from 'next/image';

export default function Category() {
    return (
      <div className="category">
        <h3 className="category-heading">Categories</h3>
        <div className="category-items">
          <div className="category-item">
            <Image src={"/shirt.svg"} width={15} height={20} alt="phone" />
            <span className="category-item-flex">T-Shirts</span>
          </div>
          <div className="category-item">
            <Image src={"/jacket.svg"} width={15} height={20} alt="video camera" />
            <span className="category-item-flex">Jackets</span>
          </div>
          <div className="category-item">
            <Image
              src={"/pants.svg"}
              width={15}
              height={20}
              alt="desktop computer"
            />
            <span className="category-item-flex">Pants</span>
          </div>
          <div className="category-item">
            <Image
              src={"/sneaker.svg"}
              width={15}
              height={20}
              alt="Head phones"
            />
            <span className="category-item-flex">Sneakers</span>
          </div>
          <div className="category-item">
            <Image src={"/socks.svg"} width={15} height={20} alt="Head phones" />
            <span className="category-item-flex">Socks</span>
          </div>
          <div className="category-item">
            <Image src={"/watch.svg"} width={15} height={20} alt="Watches" />
            <span className="category-item-flex">Watches</span>
          </div>
        </div>
      </div>
    );
}