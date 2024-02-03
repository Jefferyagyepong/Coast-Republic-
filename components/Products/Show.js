
import Image from "next/image";
import { useEffect } from "react";
export default function Show() {
       useEffect(() => {
         const initSlider = () => {
           const imageList = document.querySelector(
             ".slider-wrapper .image-list"
           );
           const slideButtons = document.querySelectorAll(
             ".slider-wrapper .slide-button"
           );
           const sliderScrollbar = document.querySelector(
             ".contai .slider-scrollbar"
           );
           const scrollbarThumb =
             sliderScrollbar.querySelector(".scrollbar-thumb");
           const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

           // Handle scrollbar thumb drag
           scrollbarThumb.addEventListener("mousedown", e => {
             const startX = e.clientX;
             const thumbPosition = scrollbarThumb.offsetLeft;
             const maxThumbPosition =
               sliderScrollbar.getBoundingClientRect().width -
               scrollbarThumb.offsetWidth;

             // Update thumb position on mouse move
             const handleMouseMove = e => {
               const deltaX = e.clientX - startX;
               const newThumbPosition = thumbPosition + deltaX;

               // Ensure the scrollbar thumb stays within bounds
               const boundedPosition = Math.max(
                 0,
                 Math.min(maxThumbPosition, newThumbPosition)
               );
               const scrollPosition =
                 (boundedPosition / maxThumbPosition) * maxScrollLeft;

               scrollbarThumb.style.left = `${boundedPosition}px`;
               imageList.scrollLeft = scrollPosition;
             };

             // Remove event listeners on mouse up
             const handleMouseUp = () => {
               document.removeEventListener("mousemove", handleMouseMove);
               document.removeEventListener("mouseup", handleMouseUp);
             };

             // Add event listeners for drag interaction
             document.addEventListener("mousemove", handleMouseMove);
             document.addEventListener("mouseup", handleMouseUp);
           });

           // Slide images according to the slide button clicks
           slideButtons.forEach(button => {
             button.addEventListener("click", () => {
               const direction = button.id === "prev-slide" ? -1 : 1;
               const scrollAmount = imageList.clientWidth * direction;
               imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
             });
           });

           // Show or hide slide buttons based on scroll position
           const handleSlideButtons = () => {
             slideButtons[0].style.display =
               imageList.scrollLeft <= 0 ? "none" : "flex";
             slideButtons[1].style.display =
               imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
           };

           // Update scrollbar thumb position based on image scroll
           const updateScrollThumbPosition = () => {
             const scrollPosition = imageList.scrollLeft;
             const thumbPosition =
               (scrollPosition / maxScrollLeft) *
               (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
             scrollbarThumb.style.left = `${thumbPosition}px`;
           };

           // Call these two functions when image list scrolls
           imageList.addEventListener("scroll", () => {
             updateScrollThumbPosition();
             handleSlideButtons();
           });
         };

         window.addEventListener("resize", initSlider);
         window.addEventListener("load", initSlider);
       }, []);
  return (
    <div className="contai">
      <div className="slider-wrapper">
        <button
          id="prev-slide"
          className="slide-button material-symbols-rounded"
        >
          <Image
            src={"/arrow-forward.svg"}
            width={20}
            height={20}
            alt="chevronleft"
          />
        </button>
        <ul className="image-list">
          <Image
            src={
              "https://images.unsplash.com/photo-1626379530580-6a58c5cf1d5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="image-item"
            alt="img"
            width={90}
            height={80}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="image-item"
            alt="img"
            width={90}
            height={80}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="image-item"
            alt="img"
            width={90}
            height={80}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1597350584914-55bb62285896?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="image-item"
            alt="img"
            width={90}
            height={80}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1561095884-bb4b8d43c18b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="image-item"
            alt="img"
            width={90}
            height={80}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1626771652942-93d834f3d1fd?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="image-item"
            alt="img"
            width={90}
            height={80}
          />
        </ul>
        <button
          id="next-slide"
          className="slide-button material-symbols-rounded"
        >
          <Image
            src={"/arrow-back.svg"}
            width={20}
            height={20}
            alt="chevronright"
          />
        </button>
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  );
}
