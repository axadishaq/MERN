import React, { useEffect, useState } from "react";

export const UseEffect = () => {
   const [count, setCount] = useState(0);
   const [num, setNum] = useState(0);
   useEffect(() => {
      alert("Button Clicked");
   }, [num]);
   useEffect(() => {
      alert("do we process more!");
   }, [count]);
   console.log("Outside the useEffect!");
   return (
      <div>
         <h1>{count}</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <h1>{num}</h1>
         <button onClick={() => setNum(num + 1)}>Increment 2</button>
      </div>
   );
};
