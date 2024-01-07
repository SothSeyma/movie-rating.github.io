import React, { useState, useEffect } from 'react';

function Countdown({ releaseDate }) {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const [day, month, year] = releaseDate.split('-');
    const releaseDateTime = new Date(`${year}-${month}-${day}`);
    const gmtOffset = releaseDateTime.getTimezoneOffset() / 60; // Convert minutes to hours
    const releaseDateTimeAdjusted = new Date(releaseDateTime.getTime() + gmtOffset * 60 * 60 * 1000);
    
    const timeRemaining = releaseDateTimeAdjusted - now;

    // Ensure the time remaining is positive
    if (timeRemaining <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [releaseDate]);

  return (
    <div>
      <p>Time until release:</p>
      <p>{timeRemaining.days}D, {timeRemaining.hours}h, {timeRemaining.minutes}min, {timeRemaining.seconds}s</p>
    </div>
  );
}

export default Countdown;
