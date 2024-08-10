import Image from 'next/image';

export default function Category() {
    return (
      <div className="category">
        <h3 className="category-heading">Categories</h3>
        <div className="category-items">
          <div className="category-item">
            <Image src={"/shirt.svg"} width={15} height={20} alt="phone" />
            <h6 className="category-item-flex">T-Shirts</h6>
          </div>
          <div className="category-item">
            <Image src={"/jacket.svg"} width={15} height={20} alt="video camera" />
            <h6 className="category-item-flex">Jackets</h6>
          </div>
          <div className="category-item">
            <Image
              src={"/pants.svg"}
              width={15}
              height={20}
              alt="desktop computer"
            />
            <h6 className="category-item-flex">Pants</h6>
          </div>
          <div className="category-item">
            <Image
              src={"/sneaker.svg"}
              width={15}
              height={20}
              alt="Head phones"
            />
            <h6 className="category-item-flex">Sneakers</h6>
          </div>
          <div className="category-item">
            <Image src={"/socks.svg"} width={15} height={20} alt="Head phones" />
            <h6 className="category-item-flex">Socks</h6>
          </div>
          <div className="category-item">
            <Image src={"/watch.svg"} width={15} height={20} alt="Watches" />
            <h6 className="category-item-flex">Watches</h6>
          </div>
        </div>
      </div>
    );
}