export default function PayNow() {
  return (
    <div className="form-container">
      <form
        action="https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay"
        method="POST"
      >
        <div className="rows">
          <div className="col-25">
            <label htmlFor="fname">First Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="firstname"
              id="fname"
              className="input-area"
            />
          </div>
        </div>
        <div className="rows">
          <div className="col-25">
            <label htmlFor="lname">Last Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="lastname"
              id="lname"
              className="input-area"
            />
          </div>
        </div>
        <div className="rows">
          <div className="col-25">
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className="col-75">
            <input
              type="phone"
              name="phone"
              id="phone"
              className="input-area"
            />
          </div>
        </div>
        <br /> <br /> <br />
        <div className="rows">
          <input type="submit" name="" value="Pay" />
        </div>
      </form>
    </div>
  );
}
