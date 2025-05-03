// components/ItemsYouMayLike.js
import Link from 'next/link';

const items = [
  { id: 1, name: 'Item 1', price: '$10', image: '/thugga.jpg' },
  { id: 2, name: 'Item 2', price: '$20', image: '/images/item2.jpg' },
  { id: 3, name: 'Item 3', price: '$30', image: '/images/item3.jpg' },
];

export default function ItemsYouMayLike() {
  return (
    <section className="items-you-may-like">
      <h2>Items You May Like</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <Link href={`/items/${item.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
}