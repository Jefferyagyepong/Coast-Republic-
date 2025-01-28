




// components/DisappearingText.js
import React, { useState, useEffect } from 'react';
import styles from './DisappearingText.module.css';

const DisappearingText = ({ text, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration); // Text will disappear after `duration` milliseconds.

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={`${styles.text} ${!visible ? styles.fadeOut : ''}`}>
      {text}
    </div>
  );
};

export default DisappearingText;


