import React from "react";
import Products from "./Products";
export const MyProducts = () => {
   return (
      <>
         {Products.map((product) => (
            <div key={product.id}>
               <h1>{product.name}</h1>
               <p>{product.description}</p>
               <p>{product.category}</p>
               <p>{product.price}</p>
            </div>
         ))}
      </>
   );
};  
