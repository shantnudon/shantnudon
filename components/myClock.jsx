"use client"

import { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const options = {
    timeZone: 'Asia/Kolkata',
    hour12: true,
  };

  const ISTTime = currentTime.toLocaleTimeString('en-US', options);

  return (
    <>
      <p className="text-center text-4xl m-4">{ISTTime}</p>
    </>
  );
};

export default Clock;