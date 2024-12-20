import Image from 'next/image';
export default function IbridApp() {
    return (
      <div className="ibrid-box bgg222"> 
        <h3>Download Our App</h3><br/>
        <p>
          Unlock a world of limetless possiblities. Download the Coast Republic app and
          embark on a journey of discovery and connection.
        </p>

        <div className="ibrid-flex">
          <Image src={"/apple.svg"} alt="apple" width={70} height={100} />
          <Image src={"/android.svg"} alt="android" width={70} height={100} />
        </div>
      </div>
    );
}