// components/ItemsYouMayLike.js
import Link from 'next/link';
import Image from 'next/image';

const items = [
  { id: 1, name: 'Item 1', price: 'GHS 300', image: '/thugga.jpg' },
  { id: 2, name: 'Item 2', price: 'GHS 900',  image: '/products/force1c.JPG'},
  { id: 3, name: 'Item 3', price: 'GHS 750', image: '/products/force2a.JPG' },
];

export default function ItemsYouMayLike() {
  return (
    <section className="items-you-may-like">
      <h2>Items You May Like</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <Image src={item.image} alt={item.name} className="item-image"  width={200} height={150}/>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            
              <Link href={`/products/${product.slug}`}>           
                 View Details               
                </Link>
        
          </div>
        ))}
      </div>
    </section>
  );
}