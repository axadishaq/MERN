import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const SingleFetch = () => {
   const { id } = useParams();
   const [product, setProduct] = useState(null);

   const fetchProduct = async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(data);
   };

   useEffect(() => {
      fetchProduct();
   }, [id]);
   return (
      <>
         {product ? (
            <>
               <center>
                  <img src={product.thumbnail}></img>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <p>{product.category}</p>
                  <p>{product.price}</p>
               </center>
            </>
         ) : (
            <center>
               <div class="spinner-border text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
               </div>
            </center>
         )}
      </>
   );
};
