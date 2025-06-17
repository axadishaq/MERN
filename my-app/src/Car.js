import react from "react";
const Car = () => {
   let img1 =
      "https://i.pinimg.com/736x/0b/bf/0c/0bbf0c5578c638d5a1bd697d9aa2a027.jpg";
   return (
      <>
         <div className="card mb-3" style={{ width: "36rem" }}>
            <div className="row g-0">
               <div className="col-md-4">
                  <img src={img1} className="img-fluid" alt="..." />
               </div>
               <div className="col-md-8">
                  <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                     </p>
                     <p className="card-text">
                        <small className="text-body-secondary">
                           Last updated 3 mins ago
                        </small>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default Car;
