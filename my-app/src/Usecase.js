import React, { useState } from "react";

export const Usecase = () => {
   const [count, setCount] = useState(0);
   const incum = () => {
      setCount(count + 1);
   };
   const decum = () => {
      if (count > 0) {
         setCount(count - 1);
      } else {
         setCount(0);
      }
   };
   return (
      <div className="box">
         <h1>{count}</h1>
         <button onClick={incum}>Increment</button>
         <button onClick={decum}>Decrement</button>
      </div>
   );
};
