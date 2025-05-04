// components/Carousel.js
import Image from "next/image";
export default function Carousel({ images }) {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div key={index} className="carousel-item">
            <Image src={src} alt={`Slide ${index + 1}`} width={200} height={150} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .carousel {
          width: 100%;
          max-width: 600px;
          background:hsl(0%, 0%, 92%);
          margin: 0 auto;
          overflow: hidden;
          position: relative;
          padding:20px 30px;
        }

        .carousel-inner {
          display: flex;
          width: ${images.length * 100}%;
          animation: slide ${images.length * 5}s infinite;
        }

        .carousel-item {
          flex: 0 0 ${100 / images.length}%;
          width: ${100 / images.length}%;
        }

        img {
                 
          object-fit: cover;
          display: block;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          ${images.map(
            (_, index) => `
              ${(index + 1) * (100 / images.length)}% {
                transform: translateX(-${(index + 1) * (100 / images.length)}%);
              }
            `
          ).join('')}
          100% {
            transform: translateX(-${100 * images.length}%);
          }
        }
      `}</style>
    </div>
  );
}