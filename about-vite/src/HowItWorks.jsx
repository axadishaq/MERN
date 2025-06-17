import React from "react";

export const HowItWorks = () => {
   return (
      <>
         <section id="how-it-works" className="py-5 bg-light">
            <div className="container">
               <div className="text-center mb-5">
                  <h2 className="fw-bold section-title">How HeartLink Works</h2>
                  <p className="text-muted">
                     Find your perfect match in just a few simple steps
                  </p>
               </div>
               <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                     <div className="steps">
                        <div className="step">
                           <div className="step-number">1</div>
                           <div className="step-content">
                              <h4>Create Your Profile</h4>
                              <p>
                                 Tell us about yourself and what you're looking
                                 for in a partner.
                              </p>
                           </div>
                        </div>
                        <div className="step">
                           <div className="step-number">2</div>
                           <div className="step-content">
                              <h4>Take Our Compatibility Quiz</h4>
                              <p>
                                 Answer questions to help us understand your
                                 personality and preferences.
                              </p>
                           </div>
                        </div>
                        <div className="step">
                           <div className="step-number">3</div>
                           <div className="step-content">
                              <h4>Get Matched</h4>
                              <p>
                                 Receive daily matches based on compatibility
                                 scores.
                              </p>
                           </div>
                        </div>
                        <div className="step">
                           <div className="step-number">4</div>
                           <div className="step-content">
                              <h4>Start Connecting</h4>
                              <p>
                                 Message, video chat, and meet your matches in a
                                 safe environment.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <img
                        src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                        alt="How it works"
                        className="img-fluid rounded-4 shadow"
                     />
                  </div>
               </div>
            </div>
         </section>

         <section className="py-5 cta-section">
            <div className="container text-center">
               <h2 className="fw-bold mb-4">
                  Ready to Find Your Perfect Match?
               </h2>
               <p className="lead mb-4">
                  Join thousands of happy couples who met on HeartLink
               </p>
               <a href="signup.html" className="btn btn-light btn-lg px-5">
                  Sign Up Free
               </a>
            </div>
         </section>
      </>
   );
};
