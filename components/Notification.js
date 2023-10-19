
  
  export default function Notification() {
  return (

  

  <div className="notification-toast" data-toast>

    <button className="toast-close-btn" data-toast-close>
      <ion-icon name="close-outline"></ion-icon>
    </button>

    <div className="toast-banner">
      <img src={"/thrift.jpeg"} alt="Rose Gold Earrings" width="80" height="70"/>
    </div>

    <div className="toast-detail">

      <p className="toast-message">
        Check out Thrifts Arena
      </p>

      <p className="toast-title">
        Cop that sneaker now
      </p>

      <p className="toast-meta">
        <time datetime="PT2M">2 Minutes</time> ago
      </p>

    </div>

      </div>
      
  );
}



