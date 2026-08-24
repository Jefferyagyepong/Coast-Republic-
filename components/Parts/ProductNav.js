// ProductPageNav.jsx
'use client';

import { useState, useRef, useEffect } from 'react';

const navItems = [
  { id: 'pickup',   label: 'Pickup'   },
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
    <div className="width-full">
      {/* Sliding indicator */}
      <div className="relative">
        <div
          className="tab-underline"
          style={{ left: indicator.left, width: indicator.width }}
        />
      </div>

      {/* Scrollable tabs container */}
      <div
        ref={containerRef}
        className="horizontal-scroll-container"
      >
        <div className="flex-row-centered">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                ref={el => { buttonRefs.current[index] = el; }}
                onClick={() => setActiveTab(item.id)}
                className={`
                 interactive-pill
                  ${isActive
                    ? 'text-black-100 dark:text-black-100'
                    : 'text-black-100 hover:text-black-100 dark:text-gray-400 dark:hover:text-gray-200'
                  }
                `}
              >
                {/* Inline SVG icons */}
            

                {item.id === 'pickup' && (
                  <svg className="w-4 h-4" viewBox="0 0 10 0" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}


                {item.id === 'warranty' && (
                  <svg className="icon" viewBox="0 0 0 10" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}

                {item.id === 'shipping' && (
                  <svg className="icon" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                )}

                <span>{item.label}</span>

                {/* Small active dot for mobile */}
                <span
                  className={`
                    absolute -bottom-1.5 left-1/2 -translate-x-1/2 block h-1 w-1 rounded-full bg-blue-600 transition-all duration-200
                    ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Optional hint line */}
      <div className="dark">
        {activeTab === 'pickup'   && 'Collect from Osu or Airport City in 1–2 hrs'}
        {activeTab === 'warranty' && '12-month official warranty included'}
        {activeTab === 'shipping' && 'Nationwide • Tracked • Cash on delivery'}
      </div>
    </div>
  );
}