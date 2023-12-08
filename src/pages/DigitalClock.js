import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './CSS/DigitalClock.css'; // Create a separate CSS file for styling

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="digital-clock-container">
      <Clock value={currentTime} renderNumbers={true} hourMarksLength={20} minuteMarksLength={10} />
    </div>
  );
};

export default DigitalClock;
