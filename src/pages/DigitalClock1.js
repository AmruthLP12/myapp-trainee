import React, { useState, useEffect } from 'react';
// import DigitalClock from "react-ist-digital-clock-example";
// import Clock from 'react-live-clock';





const DigitalClock1 = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };
  return (
    <div>
      {/* <DigitalClock /> */}
      {/* <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /> */}
      <h2>Current Time:</h2>
      <p>{formatTime(currentTime)}</p>
      <h2>Current Date:</h2>
      <p>{formatDate(currentTime)}</p>
    </div>
  )
}

export default DigitalClock1
