
import React, { useEffect, useState } from 'react';
import "./nav.scss";

const formatDateTime = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateNum = date.getDate();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  return `${day} ${month} ${dateNum} ${hours}:${minutes} ${ampm}`;
};

const Datetime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000 * 10); // update every 10 seconds for better accuracy
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="datetime">
      {formatDateTime(now)}
    </div>
  );
};

export default Datetime;
