import React from "react";
import { Navbar } from "./Navbar";
import { Fetch } from "./Fetch";
import { Card } from "./Card";

export const Home = () => {
   return (
      <>
         <Navbar />
         <center>
            <h1>Welcome to Home page!</h1>
         </center>
         <div className="container mb-5">
            <div className="row g-3">
               <Card
                  title="Product 1"
                  description="This is product 1 description."
                  price="1200"
                  thumbnail="https://i.pinimg.com/736x/3a/b2/36/3ab2368640b45db648ca33e85d143d4b.jpg"
               />
               <Card
                  title="Product 2"
                  description="This is product 1 description."
                  price="1200"
                  thumbnail="https://i.pinimg.com/736x/3a/b2/36/3ab2368640b45db648ca33e85d143d4b.jpg"
               />
            </div>
         </div>
         {/* Loading Spinner 
            <div class="spinner-border text-info" role="status">
               <span class="visually-hidden">Loading...</span>
            </div> */}
         <Fetch />
      </>
   );
};
