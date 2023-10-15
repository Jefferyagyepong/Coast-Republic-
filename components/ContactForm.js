import { useState } from "react";

export default function ContactForm() {
  const [candidat, setCandidat] = useState({
    firstName: "",
    lastName: "",
    region: "",
    message: "",
  });
  const [user, setUser] = useState();

  const onSubmit = async e => {
    e.preventDefault();
    if (candidat.firstName === "" || candidat.lastName === "")
      return alert("Please enter your name");
    await fetch("/api/contactpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidat),
    })
      .then(res => res.json())
      .then(data => setUser(data.user));
  };

  return (
    <div className="form-container">
      <form
        onSubmit={onSubmit}
        className=""
        action="/api/contactposts"
        method="POST"
      >
        <label htmlFor="Fname">First Name</label>
        <input
          type="text"
          className=""
          onChange={() => {
            setCandidat({ ...candidat, firstName: event.target.value });
          }}
        ></input>
        <label htmlFor="Fname">Last Name</label>
        <input
          type="text"
          className=""
          onChange={() => {
            setCandidat({ ...candidat, lastName: event.target.value });
          }}
        ></input>

        <div className="col-25">
          <label htmlFor="region">Region</label>
        </div>
        <div className="col-75">
          <select
            onChange={() => {
              setCandidat({ ...candidat, region: event.target.value });
            }}
          >
            <option value="ahafo" className="input-area">
              Ahafo
            </option>
            <option value="ashanti">Ashanti</option>
            <option value="bono">Bono</option>
            <option value="bono-east">Bono-East</option>
            <option value="central">Central</option>
            <option value="eastern">Eastern</option>
            <option value="greater-accra">Greater Accra</option>
            <option value="northern">Northern</option>
            <option value="north-east">North-east</option>
            <option value="oti">Oti</option>
            <option value="western-north">Western-North</option>
            <option value="western">Western</option>
            <option value="savannah">Savannah</option>
            <option value="upper-west">Upper-West</option>
            <option value="upper-east">Upper-East</option>
            <option value="volta">Volta</option>
          </select>
        </div>

        <label htmlFor="Message">Message</label>
        <textarea
          rows="6"
          cols=""
          onChange={() => {
            setCandidat({ ...candidat, message: event.target.value });
          }}
        ></textarea>

        <button className="" type="submit">
          <>Submit</>
        </button>
      </form>
      <div className="homme">{user ? "user info : " + user : ""}</div>
    </div>
  );
}
