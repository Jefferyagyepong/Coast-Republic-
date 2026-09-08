// components/Head/Navbar.js
'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const { cartCount } = useCart(); // ✅ direct value, not a function

  return (
    <Link className="cart" href="/cart" aria-label={`Cart, ${cartCount} items`}>
      <Image src="/shopping-cart.svg" alt="" width={20} height={20} />
      {cartCount > 0 && (
        <span className="cart-count">{cartCount}</span>
      )}
    </Link>
  );
}