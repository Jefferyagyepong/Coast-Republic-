// components/ProductPageNav.tsx
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
  const [indicatorStyle, setIndicatorStyle] = useState({ left: '0px', width: '0px' });

  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.id === activeTab);
    const activeEl = itemsRef.current[activeIndex];

    if (activeEl && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();

      setIndicatorStyle({
        left: `${elRect.left - containerRect.left}px`,
        width: `${elRect.width}px`,
      });
    }
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* Indicator bar */}
      <div className="relative">
        <div
          className="absolute bottom-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ease-out"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />
      </div>

      {/* Scrollable navigation */}
      <div
        ref={containerRef}
        className="relative overflow-x-auto scrollbar-hide border-b border-gray-200 dark:border-gray-800"
      >
        <div className="flex items-center px-4 py-3 min-w-max">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                ref={el => { itemsRef.current[index] = el; }}
                onClick={() => setActiveTab(item.id)}
                className={`
                  relative flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-colors
                  ${isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                  }
                `}
              >
                {/* Simple SVG icons — no external library */}
                {item.id === 'delivery' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )}
                {item.id === 'pickup' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {item.id === 'details' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {item.id === 'reviews' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )}
                {item.id === 'warranty' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                {item.id === 'shipping' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                )}

                <span>{item.label}</span>

                {/* Tiny active dot (good for mobile) */}
                <span
                  className={`
                    absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-blue-600 transition-all duration-200
                    ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Optional: small hint text under the tabs */}
      <div className="mt-3 px-4 text-sm text-gray-500 dark:text-gray-400">
        {activeTab === 'delivery' && 'Same-day & next-day in Greater Accra • Free over GH₵400'}
        {activeTab === 'pickup' && 'Collect from Osu or East Legon within 1–2 hours'}
        {activeTab === 'details' && 'Full specifications, dimensions & features'}
        {activeTab === 'reviews' && 'Customer ratings and verified photos'}
        {activeTab === 'warranty' && '12-month official warranty included'}
        {activeTab === 'shipping' && 'Nationwide • Tracked • Cash on delivery available'}
      </div>
    </div>
  );
}