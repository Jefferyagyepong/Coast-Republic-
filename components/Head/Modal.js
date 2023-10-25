import {
    useRef, useEffect
} from "react";
import Image from "next/image";
export default function Modal() {
    const ref = useRef(null);
    
       const modal = ref.datamodal;
       const modalCloseBtn = ref.datamodalclose;
       const modalCloseOverlay = ref.datamodaloverlay;
      
  

    // modal function
    const modalCloseFunc = function () {
      modal.classList.add("closed");
    };
    useEffect(() => {

        const modalCloseOverlay = (e) => {
          return("click", modalCloseFunc);
        };
        const modalCloseBtn = (e) => {
          return("click", modalCloseFunc);
        };
    });

         



      return (
        <div className="whole">
          <div className="overlay" dataoverlay>
            {" "}
          </div>

          <div className="modal" datamodal>
            <div
              className="modal-close-overlay"
              data-modal-overlay
              ref={ref}
              onClick={modalCloseOverlay}
            ></div>

            <div className="modal-content">
              <button
                className="modal-close-btn"
                datamodalclose
                ref={ref}
                onClick={modalCloseBtn}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div className="newsletter-img">
                <Image src={"#"} alt="subscribe newsletter" height={300}  width={400} />
               
              </div>

              <div className="newsletter">
                <form action="#">
                  <div className="newsletter-header">
                    <h3 className="newsletter-title">Subscribe Newsletter.</h3>

                    <p className="newsletter-desc">
                      Subscribe to <b>Coast Republic</b> to get latest products
                      and discount update.
                    </p>
                  </div>

                  <input
                    type="email"
                    name="email"
                    className="email-field"
                    placeholder="Email Address"
                    required
                  />

                  <button type="submit" className="btn-newsletter">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}

