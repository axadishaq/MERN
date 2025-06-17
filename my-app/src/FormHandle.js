import React, { useState } from "react";

export const FormHandle = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [input, setInput] = useState("");

   const submit = () => {
      console.log(name, email, password);
   };
   //  clear input feilds
   const handleChange = (e) => setInput(e.target.value);
   const handleInput = (e) => {
      e.preventDefault();
      console.log(input);
      setInput("");
   };

   return (
      <div>
         <form onSubmit={handleInput}>
            <input type="text" value={input} onChange={handleChange} />
            <button type="submit">Submit</button>
         </form>

         <input
            type="text"
            value={name}
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
         />
         <br></br>
         <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
         />
         <br></br>
         <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
         />
         <br></br>
         <button type="submit" onClick={submit}>
            Submit
         </button>
      </div>
   );
};
