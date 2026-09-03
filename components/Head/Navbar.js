/* eslint-disable react/react-in-jsx-scope */
'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const { getCartCount } = useCart();
  const count = getCartCount();

  return (
    <Link className="cart" href="/cart" aria-label={`Cart, ${count} items`}>
      {/* was width={20} height={30} — stretched a square icon. Fixed to 20x20 */}
      <Image src="/shopping-cart.svg" alt="" width={20} height={20} />
      {count > 0 && <span className="cart-count">{count}</span>}
    </Link>
  );
}
