import React from "react";
import Products from "./Products";

export const MyProductCards = () => {
   return (
      <>
         <div className="container">
            <div className="row">
               {Products.map((product) => (
                  <div className="col-md-4 mb-4">
                     {/* card  */}
                     <div class="card" style={{ width: "18rem;" }}>
                        <img
                           src={product.image}
                           class="card-img-top"
                           alt="..."
                        />
                        <div class="card-body">
                           <h5 class="card-title">{product.name}</h5>
                           <p class="card-text">{product.description}</p>
                           <p class="card-text">{product.category}</p>
                           <a href="#" class="btn btn-primary">
                              {product.price} $
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};
