import React from "react";
import { Link } from "react-router";
export const Navbar = () => {
   return (
      <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">
                  Dropdown
               </Link>

               <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                     <li className="nav-item ">
                        <Link className="nav-link" to="/">
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">
                           About
                        </Link>
                     </li>
                     <li className="nav-item ">
                        <Link className="nav-link" to="/blog">
                           Blog
                        </Link>
                     </li>
                     <li className="nav-item ">
                        <Link className="nav-link" to="/products">
                           Products
                        </Link>
                     </li>
                     <li className="nav-item ">
                        <Link className="nav-link" to="/users">
                           Users
                        </Link>
                     </li>
                  </ul>

                  <button className="btn btn-outline-success" type="submit">
                     Documentation
                  </button>
               </div>
            </div>
         </nav>

         {/* <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
               <Link to="/blog">Blog</Link>
            </li>
         </ul> */}
      </>
   );
};
