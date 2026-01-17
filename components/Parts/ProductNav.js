// ProductPageNav.jsx
'use client';

import { useState, useRef, useEffect } from 'react';

const navItems = [
  { id: 'delivery', label: 'Delivery' },
  { id: 'pickup',   label: 'Pickup'   },
  { id: 'details',  label: 'Details'  },
  { id: 'reviews',  label: 'Reviews'  },
  { id: 'warranty', label: 'Warranty' },
  { id: 'shipping', label: 'Shipping' },
];

export default function ProductPageNav() {
  const [activeTab, setActiveTab] = useState('delivery');
  const [indicator, setIndicator] = useState({ left: '0px', width: '0px' });

  const containerRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.id === activeTab);
    const btn = buttonRefs.current[activeIndex];

    if (btn && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();

      setIndicator({
        left: `${btnRect.left - containerRect.left}px`,
        width: `${btnRect.width}px`,
      });
    }
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* Sliding indicator */}
      <div className="relative">
        <div
          className="absolute bottom-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
      </div>

      {/* Scrollable tabs container */}
      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide border-b border-gray-200 dark:border-gray-800"
      >
        <div className="flex items-center px-4 py