import React from "react";
import { Link } from "react-router";

export const Navbar = () => {
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
               <Link className="navbar-brand" to="#">
                  <i className="fas fa-heart me-2"></i>HeartLink
               </Link>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item">
                        <Link className="nav-link active" to="/">
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/features">
                           Features
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/howitworks">
                           How It Works
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/successstories">
                           Success Stories
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/pricing">
                           Pricing
                        </Link>
                     </li>
                     <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                        <Link className="btn btn-outline-light me-4" to="/login">
                           Login
                        </Link>
                     </li>
                     <li className="nav-item mt-2 mt-lg-0">
                        <Link className="btn btn-primary " to="/signup">
                           Sign Up
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
};
