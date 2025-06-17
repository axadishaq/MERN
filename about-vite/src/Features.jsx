import React from "react";

export const Features = () => {
   return (
      <>
         <section id="features" className="py-5">
            <div className="container">
               <div className="text-center mb-5">
                  <h2 className="fw-bold section-title">
                     Why Choose HeartLink
                  </h2>
                  <p className="text-muted">
                     Our unique features make finding love easier than ever
                  </p>
               </div>
               <div className="row g-4">
                  <div className="col-md-4">
                     <div className="card feature-card h-100">
                        <div className="card-body text-center p-4">
                           <div className="feature-icon mb-3">
                              <i className="fas fa-brain"></i>
                           </div>
                           <h4 className="fw-bold">Smart Matching</h4>
                           <p className="text-muted">
                              Our AI learns your preferences to suggest better
                              matches over time.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card feature-card h-100">
                        <div className="card-body text-center p-4">
                           <div className="feature-icon mb-3">
                              <i className="fas fa-shield-alt"></i>
                           </div>
                           <h4 className="fw-bold">Verified Profiles</h4>
                           <p className="text-muted">
                              All profiles are manually verified to ensure
                              authenticity and safety.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card feature-card h-100">
                        <div className="card-body text-center p-4">
                           <div className="feature-icon mb-3">
                              <i className="fas fa-video"></i>
                           </div>
                           <h4 className="fw-bold">Video Dating</h4>
                           <p className="text-muted">
                              Connect face-to-face with our built-in video chat
                              before meeting in person.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="py-5 cta-section">
         <div className="container text-center">
            <h2 className="fw-bold mb-4">Ready to Find Your Perfect Match?</h2>
            <p className="lead mb-4">
               Join thousands of happy couples who met on HeartLink
            </p>
            <a href="signup.html" className="btn btn-light btn-lg px-5"
               >Sign Up Free</a
            >
         </div>
      </section>

      </>
   );
};
