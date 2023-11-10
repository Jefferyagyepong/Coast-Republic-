import Image from "next/image";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import { useEffect } from "react";
export default function Modal() {
     useEffect(() => {
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

   
     }, []);
  
    const [state, handleSubmit] = useForm("maygvdqr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
    return (
      <div>
        <div className="overlay" data-overlay></div>

        <div className="modal" data-modal>
          <div className="modal-close-overlay" data-modal-overlay></div>

          <div className="modal-content">
            <button className="modal-close-btn" data-modal-close>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="newsletter-img">
              <Image src={"/crlogo.svg"} alt="logo" width={400} height={400} />
            </div>

            <div className="newsletter">
              <form action="#">
                <div className="newsletter-header">
                  <h3 className="newsletter-title">Subscribe Newsletter.</h3>

                  <p className="newsletter-desc">
                    Subscribe the <b>Coast Republic</b> to get latest products
                    and discount update.
                  </p>
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  className="email-field"
                  placeholder="Email Address"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
