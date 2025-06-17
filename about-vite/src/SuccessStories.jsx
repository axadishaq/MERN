import React from "react";

export const SuccessStories = () => {
   return (
      <>
         <section id="testimonials" className="py-5">
            <div className="container">
               <div className="text-center mb-5">
                  <h2 className="fw-bold section-title">Success Stories</h2>
                  <p className="text-muted">
                     Real people who found love through HeartLink
                  </p>
               </div>
               <div className="row g-4">
                  <div className="col-md-4">
                     <div className="card testimonial-card h-100">
                        <div className="card-body p-4">
                           <div className="d-flex align-items-center mb-3">
                              <img
                                 src="https://randomuser.me/api/portraits/women/32.jpg"
                                 alt="Sarah"
                                 className="rounded-circle me-3"
                                 width="60"
                              />
                              <div>
                                 <h5 className="mb-0">Sarah & Mark</h5>
                                 <small className="text-muted">
                                    Together for 2 years
                                 </small>
                              </div>
                           </div>
                           <p>
                              "HeartLink's compatibility matching was spot on.
                              Mark and I connected instantly and have been
                              inseparable ever since!"
                           </p>
                           <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card testimonial-card h-100">
                        <div className="card-body p-4">
                           <div className="d-flex align-items-center mb-3">
                              <img
                                 src="https://randomuser.me/api/portraits/men/45.jpg"
                                 alt="James"
                                 className="rounded-circle me-3"
                                 width="60"
                              />
                              <div>
                                 <h5 className="mb-0">James & Emily</h5>
                                 <small className="text-muted">
                                    Married for 1 year
                                 </small>
                              </div>
                           </div>
                           <p>
                              "I was skeptical about online dating, but
                              HeartLink's video feature helped me feel
                              comfortable before meeting in person."
                           </p>
                           <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card testimonial-card h-100">
                        <div className="card-body p-4">
                           <div className="d-flex align-items-center mb-3">
                              <img
                                 src="https://randomuser.me/api/portraits/women/68.jpg"
                                 alt="Priya"
                                 className="rounded-circle me-3"
                                 width="60"
                              />
                              <div>
                                 <h5 className="mb-0">Priya & David</h5>
                                 <small className="text-muted">Engaged</small>
                              </div>
                           </div>
                           <p>
                              "The detailed profiles and verification system
                              made me feel safe. I'm so grateful I gave
                              HeartLink a chance!"
                           </p>
                           <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
