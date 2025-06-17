import { useState } from "react";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";

export const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState(null);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const toggleDropdown = (name) => {
      if (activeDropdown === name) {
         setActiveDropdown(null);
      } else {
         setActiveDropdown(name);
      }
   };

   return (
      <nav className="bg-white shadow-md w-full">
         <div className="max-w-8xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
               {/* Logo and brand name */}
               <div className="flex items-center">
                  <div className="flex">
                     <img src="/32580.jpg" alt="" className="h-16 w-16 " />
                     <h1 className="text-2xl font-bold text-theme-dark items-center">
                        URAAN
                     </h1>
                  </div>
               </div>

               {/* Desktop navigation links */}
               <div className="hidden md:flex text-lg font-semibold items-center space-x-6">
                  <a
                     href="#"
                     className="text-theme-medium hover:text-theme-dark px-2 py-2">
                     Home
                  </a>
                  <a
                     href="#"
                     className="text-theme-dark font-medium hover:text-theme-accent px-2 py-2">
                     Jobs
                  </a>
                  <div className="relative group">
                     <button className="text-theme-dark hover:text-theme-accent px-2 py-2 flex items-center">
                        Categories
                        <ChevronDown className="ml-1 w-4 h-4" />
                     </button>
                     <div className="absolute hidden group-hover:block bg-theme-light shadow-lg rounded-md py-1 w-48 z-10">
                        <a
                           href="#"
                           className="block px-4 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Category 1
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Category 2
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Category 3
                        </a>
                     </div>
                  </div>
                  <div className="relative group">
                     <button className="text-theme-dark hover:text-theme-accent px-2 py-2 flex items-center">
                        Location
                        <ChevronDown className="ml-1 w-4 h-4" />
                     </button>
                     <div className="absolute hidden group-hover:block bg-theme-light shadow-lg rounded-md py-1 w-48 z-10">
                        <a
                           href="#"
                           className="block px-4 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Location 1
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Location 2
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Location 3
                        </a>
                     </div>
                  </div>
                  <div className="relative group">
                     <button className="text-theme-dark hover:text-theme-accent px-2 py-2 flex items-center ">
                        Pages
                        <ChevronDown className="ml-1 w-4 h-4" />
                     </button>
                     <div className="absolute hidden group-hover:block bg-theme-light shadow-lg rounded-md py-1 w-48 z-10">
                        <a
                           href="#"
                           className="block px-4 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Page 1
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Page 2
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Page 3
                        </a>
                     </div>
                  </div>
               </div>

               {/* Mobile view: Shopping bag, login button and hamburger */}
               <div className="flex items-center space-x-4">
                  {/* Shopping bag - always visible */}
                  <div className="flex items-center">
                     <a
                        href="#"
                        className="flex items-center text-theme-dark hover:text-theme-accent">
                        <ShoppingBag className="h-6 w-6" />
                        <span className="ml-1 bg-theme-accent text-theme-dark text-xs font-semibold rounded-full px-2 py-0.5">
                           0
                        </span>
                     </a>
                  </div>
                  

                  {/* Login/Sign Up Button */}
                  <div className="hidden lg:block w-auto">
                     <a
                        href="#"
                        className="bg-theme-light hover:bg-theme-accent text-theme-dark font-medium px-5 py-4 rounded-xl transition duration-500 ease-in-out border border-theme-accent ">
                        Log In / Sign Up
                     </a>
                  </div>

                  {/* Login/Sign Up Button on mobile */}
                  <div className="md:hidden">
                     <a
                        href="#"
                        className="bg-theme-light hover:bg-theme-accent text-theme-dark font-medium px-5 py-3 rounded-lg text-sm transition duration-500 ease-in-out border border-theme-accent ">
                        Log In / Sign Up
                     </a>
                  </div>

                  {/* Mobile menu button */}
                  <div className="md:hidden">
                     <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-theme-dark hover:text-theme-accent hover:bg-theme-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-theme-accent"
                        aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                           <X className="block h-6 w-6" />
                        ) : (
                           <Menu className="block h-6 w-6" />
                        )}
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Mobile menu, show/hide based on menu state */}
         <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-2">
               <a
                  href="#"
                  className="block px-2 py-2 text-theme-medium hover:text-theme-dark">
                  Home
               </a>
               <a
                  href="#"
                  className="block px-2 py-2 text-theme-dark font-medium hover:text-theme-accent">
                  Jobs
               </a>

               {/* Categories dropdown in mobile view */}
               <div>
                  <button
                     onClick={() => toggleDropdown("categories")}
                     className="flex justify-between w-full px-2 py-2 text-theme-dark hover:text-theme-accent">
                     Categories
                     <ChevronDown
                        className={`w-4 h-4 transform ${
                           activeDropdown === "categories" ? "rotate-180" : ""
                        }`}
                     />
                  </button>
                  {activeDropdown === "categories" && (
                     <div className="pl-4 py-1">
                        <a
                           href="#"
                           className="block px-2 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Category 1
                        </a>
                        <a
                           href="#"
                           className="block px-2 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Category 2
                        </a>
                        <a
                           href="#"
                           className="block px-2 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Category 3
                        </a>
                     </div>
                  )}
               </div>

               {/* Location dropdown in mobile view */}
               <div>
                  <button
                     onClick={() => toggleDropdown("location")}
                     className="flex justify-between w-full px-2 py-2 text-theme-dark hover:text-theme-accent">
                     Location
                     <ChevronDown
                        className={`w-4 h-4 transform ${
                           activeDropdown === "location" ? "rotate-180" : ""
                        }`}
                     />
                  </button>
                  {activeDropdown === "location" && (
                     <div className="pl-4 py-1">
                        <a
                           href="#"
                           className="block px-2 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Location 1
                        </a>
                        <a
                           href="#"
                           className="block px-2 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Location 2
                        </a>
                        <a
                           href="#"
                           className="block px-2 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Location 3
                        </a>
                     </div>
                  )}
               </div>

               {/* Pages dropdown in mobile view */}
               <div>
                  <button
                     onClick={() => toggleDropdown("pages")}
                     className="flex justify-between w-full px-2 py-2 text-theme-dark hover:text-theme-accent">
                     Pages
                     <ChevronDown
                        className={`w-4 h-4 transform ${
                           activeDropdown === "pages" ? "rotate-180" : ""
                        }`}
                     />
                  </button>
                  {activeDropdown === "pages" && (
                     <div className="pl-4 py-1">
                        <a
                           href="#"
                           className="block px-2 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Page 1
                        </a>
                        <a
                           href="#"
                           className="block px-2 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Page 2
                        </a>
                        <a
                           href="#"
                           className="block px-2 py-2 text-sm text-theme-dark hover:bg-theme-accent">
                           Page 3
                        </a>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </nav>
   );
};
