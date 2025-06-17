import React from "react";

export const Home = () => {
   return (
      <>
         <header className="hero-section">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown">
                        Find Your Perfect Match Today
                     </h1>
                     <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
                        HeartLink uses advanced compatibility algorithms to
                        connect you with people who share your values,
                        interests, and lifestyle.
                     </p>
                     <div className="d-flex gap-3 animate__animated animate__fadeIn animate__delay-2s">
                        <a
                           href="signup.html"
                           className="btn btn-primary btn-lg px-4">
                           Join Now
                        </a>
                        <a
                           href="#how-it-works"
                           className="btn btn-outline-light btn-lg px-4">
                           Learn More
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block animate__animated animate__fadeIn">
                     <img
                        src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        alt="Happy couple"
                        className="img-fluid rounded-4 shadow-lg hero-img"
                     />
                  </div>
               </div>
            </div>
         </header>
         <footer className="py-5">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4 mb-4 mb-lg-0">
                     <h5 className="fw-bold mb-3">
                        <i className="fas fa-heart me-2"></i>HeartLink
                     </h5>
                     <p>
                        Connecting hearts through intelligent matching since
                        2023.
                     </p>
                     <div className="social-icons">
                        <a href="#" className="me-2">
                           <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="me-2">
                           <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="me-2">
                           <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="me-2">
                           <i className="fab fa-tiktok"></i>
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                     <h5 className="fw-bold mb-3">Company</h5>
                     <ul className="list-unstyled">
                        <li className="mb-2">
                           <a href="#">About Us</a>
                        </li>
                        <li className="mb-2">
                           <a href="#">Careers</a>
                        </li>
                        <li className="mb-2">
                           <a href="#">Press</a>
                        </li>
                        <li className="mb-2">
                           <a href="#">Blog</a>
                        </li>
                     </ul>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                     <h5 className="fw-bold mb-3">Support</h5>
                     <ul className="list-unstyled">
                        <li className="mb-2">
                           <a href="#">Help Center</a>
                        </li>
                        <li className="mb-2">
                           <a href="#">Safety Tips</a>
                        </li>
                        <li className="mb-2">
                           <a href="#">Community Guidelines</a>
                        </li>
                        <li className="mb-2">
                           <a href="#">Contact Us</a>
                        </li>
                     </ul>
                  </div>
                  <div className="col-lg-4">
                     <h5 className="fw-bold mb-3">Stay Updated</h5>
                     <p>
                        Subscribe to our newsletter for dating tips and success
                        stories.
                     </p>
                     <form className="mb-3">
                        <div className="input-group">
                           <input
                              type="email"
                              className="form-control"
                              placeholder="Your email"
                           />
                           <button className="btn btn-primary" type="submit">
                              Subscribe
                           </button>
                        </div>
                     </form>
                     <small className="text-muted">
                        By subscribing you agree to our
                        <a href="#">Privacy Policy</a>.
                     </small>
                  </div>
               </div>
               <hr className="my-4" />
               <div className="row align-items-center">
                  <div className="col-md-6 mb-3 mb-md-0">
                     <small className="text-muted">
                        © 2023 HeartLink. All rights reserved.
                     </small>
                  </div>
                  <div className="col-md-6 text-md-end">
                     <small className="text-muted">
                        <a href="#" className="text-muted me-3">
                           Terms of Service
                        </a>
                        <a href="#" className="text-muted me-3">
                           Privacy Policy
                        </a>
                        <a href="#" className="text-muted">
                           Cookie Policy
                        </a>
                     </small>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};
