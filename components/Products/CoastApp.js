import Image from "next/image";
function IbridApp() {
  return (
    <div className="ibrid-box bgg222">
      {" "}
      <br />
      <h3>Download Our App</h3>
      <br />
      <br />
      <p>
        Unlock a world of limetless possiblities. Download the Coast Republic
        app and embark on a journey of discovery and connection.
      </p>
      <br />
      <div className="ibrid-flex">
        <Image src={"/apple.svg"} alt="apple" width={70} height={100} />
        <Image src={"/android.svg"} alt="android" width={70} height={100} />
      </div>
    </div>
  );
}
export default IbridApp;
