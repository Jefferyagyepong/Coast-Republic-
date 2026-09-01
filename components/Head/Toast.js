'use client';

import { useState } from 'react';

const DEFAULT_MESSAGES = [
  { text: 'Free delivery on orders over GHS 300', href: '/delivery' },
  { text: 'New sneaker drops just landed', href: '/products' },
  { text: 'Sign up for 10% off your first order', href: '/#newsletter' },
];

export default function Toast({
  messages = DEFAULT_MESSAGES,
  speed = 22, // seconds per loop; lower = faster
}) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const sets = [messages, messages];

  return (
    <div className="announce" style={{ '--toast-speed': `${speed}s` }}>
      <div className="announce-track">
        {sets.map((set, setIndex) => (
          <div
            className="announce-set"
            key={setIndex}
            aria-hidden={setIndex === 1 ? true : undefined}
          >
            {set.map((item, i) => (
              <a className="announce-item" href={item.href} key={i}>
                {item.text}
              </a>
            ))}
          </div>
        ))}
      </div>

      <button
        className="announce-close"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
      >
        ×
      </button>

      <style jsx>{`
        .announce {
          background: #111111;
          color: #fafaf8;
          height: 2.25rem;
          width: 100%;
          flex: none; /* stay full-width even if the parent header is a flex row */
          align-self: stretch;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
          isolation: isolate; /* own stacking context, safe inside fixed/z-indexed headers */
        }

        .announce-track {
          display: flex;
          width: max-content;
          min-width: 200%;
          animation-name: scroll-right;
          animation-duration: var(--toast-speed, 22s);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .announce:hover .announce-track {
          animation-play-state: paused;
        }

        .announce-set {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .announce-item {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          color: inherit;
          padding: 0 1.75rem;
          transition: color 0.2s ease;
        }

        .announce-item:hover {
          color: #c9a876;
        }

        .announce-item + .announce-item {
          border-left: 1px solid rgba(250, 250, 248, 0.18);
        }

        .announce-close {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #fafaf8;
          font-size: 1.1rem;
          line-height: 1;
          cursor: pointer;
          opacity: 0.6;
          padding: 0.25rem 0.4rem;
          transition: opacity 0.2s ease;
        }

        .announce-close:hover {
          opacity: 1;
        }

        /* fade the edges so the close button never clips a message mid-word */
        .announce::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 3rem;
          background: linear-gradient(to right, transparent, #111111 70%);
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .announce-track {
            animation: none;
          }
          .announce-set:last-child {
            display: none;
          }
        }
      `}</style>

      <style jsx global>{`
        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}
