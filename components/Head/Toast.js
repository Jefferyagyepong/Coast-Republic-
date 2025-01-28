 


import { useState, useEffect } from 'react';

const FadeText = () => {
  const [visible, setVisible] = useState(false);

  // Toggle the text visibility every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 2000); // Toggle every 2 seconds (2000ms)

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=example1"">
      <strong><p className={`fade-text ${visible ? 'visible' : 'hidden'}`}></strong>
        Akwaaba!! We deliver to all 16 regions 
      </p>
    </div>
  );
};


};

export default FadeText;

