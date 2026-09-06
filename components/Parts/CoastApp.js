/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
function CoastApp() {
  return (
    <div>
      <h6>Download Our App</h6>
      <p>
        Unlock a world of limetless possiblities. Download the Coast Republic
        app and embark on a journey of discovery and connection.
      </p>

      <div>
        <Image src={"/apple.svg"} alt="apple" width={70} height={100} />
        <Image src={"/android.svg"} alt="android" width={70} height={100} />
      </div>
    </div>
  );
}
export default CoastApp;