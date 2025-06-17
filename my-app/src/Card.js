import React from "react";

export const Card = ({ title, description, price, category, thumbnail }) => {
   return (
      <>
         <div className="col-md-4">
            <div class="card" style={{ width: "24rem" }}>
               <img
                  src={thumbnail}
                  class="card-img-top border img-thumbnail"
                  alt="..."
               />
               <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p class="card-text">{description}</p>
                  <p class="card-text">{category}</p>

                  <a href="#" class="btn btn-primary">
                     {price} $
                  </a>
               </div>
            </div>
         </div>
      </>
   );
};
