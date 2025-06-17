import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export const Fetch = () => {
   const [products, setProducts] = useState([]);

   const fetchProducts = async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      setProducts(data.products);
   };

   useEffect(() => {
      fetchProducts();
   }, []);
   return (
      <>
         <div className="container">
            <div className="row">
               {products.map((product) => (
                  <div className="col-md-4 mb-4 ">
                     {/* card  */}
                     <div class="card" style={{ width: "18rem;" }}>
                        <img
                           src={product.thumbnail}
                           class="card-img-top border"
                           alt="..."
                        />
                        <div class="card-body">
                           <h5 class="card-title">{product.title}</h5>
                           <p class="card-text">{product.description}</p>
                           <p class="card-text">{product.category}</p>
                           <Link to={`/product/${product.id}`}>
                              <a href="#" class="btn btn-primary">
                                 {product.price} $
                              </a>
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};
