/* eslint-disable react/react-in-jsx-scope */
// components/ItemsYouMayLike.js
import Link from 'next/link';
import Image from 'next/image';

const items = [
  { id: 1, name: 'Young Thug Tee', price: 'GH₵ 300', image: '/thugga.jpg' },
  { id: 2, name: 'Nike Air Force 1 Tripple Black', price: 'GH₵ 900', image: '/products/force1c.JPG' },
  { id: 3, name: 'Nike Air Force 1 White', price: 'GH₵ 750', image: '/products/force2a.JPG' },
];

export default function ItemsYouMayLike() {
  return (
    <section className="items-you-may-like">
      <h2>Items You May Like</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <br />  <Image src={item.image} alt={item.name} className="item-image" width={150} height={100} />
            <br /> <h3>{item.name}</h3><br />
            <p>{item.price}</p><br />

            <Link href={"/products"}>
              View Details
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
}