import React from "react";

export const Pricing = () => {
   return (
      <>
         <section id="pricing" className="py-5 bg-light">
            <div className="container">
               <div className="text-center mb-5">
                  <h2 className="fw-bold section-title">
                     Simple, Transparent Pricing
                  </h2>
                  <p className="text-muted">
                     Choose the plan that works for you
                  </p>
               </div>
               <div className="row g-4 justify-content-center">
                  <div className="col-md-4">
                     <div className="card pricing-card h-100">
                        <div className="card-body p-4 text-center">
                           <h4 className="fw-bold">Free</h4>
                           <div className="price mb-3">
                              <span className="currency">$</span>
                              <span className="amount">0</span>
                              <span className="period">/month</span>
                           </div>
                           <ul className="list-unstyled mb-4">
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Basic matching
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Limited messages
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Profile creation
                              </li>
                              <li className="mb-2 text-muted">
                                 <i className="fas fa-times me-2"></i> Video
                                 chat
                              </li>
                              <li className="mb-2 text-muted">
                                 <i className="fas fa-times me-2"></i> Advanced
                                 filters
                              </li>
                              <li className="mb-2 text-muted">
                                 <i className="fas fa-times me-2"></i> Read
                                 receipts
                              </li>
                           </ul>
                           <a
                              href="signup.html"
                              className="btn btn-outline-primary w-100">
                              Get Started
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card pricing-card h-100 popular">
                        <div className="popular-badge">Most Popular</div>
                        <div className="card-body p-4 text-center">
                           <h4 className="fw-bold">Premium</h4>
                           <div className="price mb-3">
                              <span className="currency">$</span>
                              <span className="amount">29</span>
                              <span className="period">/month</span>
                           </div>
                           <ul className="list-unstyled mb-4">
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Unlimited messages
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Video chat
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Advanced matching
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 See who liked you
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Read receipts
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Priority support
                              </li>
                           </ul>
                           <a
                              href="signup.html"
                              className="btn btn-primary w-100">
                              Get Premium
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card pricing-card h-100">
                        <div className="card-body p-4 text-center">
                           <h4 className="fw-bold">VIP</h4>
                           <div className="price mb-3">
                              <span className="currency">$</span>
                              <span className="amount">99</span>
                              <span className="period">/month</span>
                           </div>
                           <ul className="list-unstyled mb-4">
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 All Premium features
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Personal matchmaker
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Profile boost
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Exclusive events
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Date coaching
                              </li>
                              <li className="mb-2">
                                 <i className="fas fa-check text-success me-2"></i>
                                 Background checks
                              </li>
                           </ul>
                           <a
                              href="signup.html"
                              className="btn btn-outline-primary w-100">
                              Go VIP
                           </a>
                        </div>
                     </div>
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
