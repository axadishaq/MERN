import React, { useState } from "react";

export const Mytime = () => {
   let mytime = new Date().toLocaleTimeString();
   const [time, setTime] = useState(mytime);

   const UpdateTime = () => {
      mytime = new Date().toLocaleTimeString();
      setTime(mytime);
   };
   setInterval(UpdateTime, 1000);
   return (
      <div className="box">
         <h1>{time}</h1>
         <button onClick={UpdateTime}>Update Time</button>
      </div>
   );
};
