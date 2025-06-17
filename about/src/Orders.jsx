import React from "react";

export const Orders = () => {
   return (
      <div className="h-auto">
         <div className="bg-theme-light min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
               <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Header */}
                  <div className="bg-theme-dark text-white p-4 flex items-center justify-between">
                     <h2 className="text-xl font-semibold">Orders</h2>
                  </div>

                  {/* Filter Tabs */}
                  <div className="flex border-b border-gray-200 text-sm font-medium">
                     <button className="flex-1 text-center py-3 px-4 border-b-2 border-theme-accent text-theme-dark hover:text-theme-dark hover:bg-theme-light">
                        All
                     </button>
                     <button className="flex-1 text-center py-3 px-4 text-theme-accent hover:text-theme-dark hover:bg-theme-light">
                        Pending
                     </button>
                     <button className="flex-1 text-center py-3 px-4 text-theme-accent hover:text-theme-dark hover:bg-theme-light">
                        Completed
                     </button>
                  </div>

                  {/* Orders List */}
                  <div className="divide-y divide-gray-300">
                     {/* Order Item */}
                     <div className="p-2 px-8 flex flex-wrap justify-between items-center hover:bg-theme-light transition-all ">
                        <div className="flex gap-2">
                           <img
                              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                              alt="Service"
                              class="w-28 h-16 rounded object-cover"
                           />
                           <div className="flex flex-col justify-center">
                              <h4 className="text-theme-dark font-semibold">
                                 Landing Page Redesign
                              </h4>
                              <p className="text-theme-medium text-sm">
                                 Due: June 1, 2025
                              </p>
                           </div>
                        </div>
                        <div className=" rounded-lg  hidden sm:block">
                           <p>RS. 2300</p>
                        </div>

                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                           Pending
                        </span>
                        <div>
                           <button className="p-2 px-6 bg-theme-accent rounded-lg text-white hover:border  border-theme-medium">
                              Message
                           </button>
                        </div>
                     </div>

                     {/* Order Item */}
                     <div className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                        <div>
                           <h4 className="text-theme-dark font-semibold">
                              Mobile App Prototype
                           </h4>
                           <p className="text-theme-medium text-sm">
                              Ordered by: Michael Johnson
                           </p>
                           <p className="text-theme-medium text-sm">
                              Completed: May 10, 2025
                           </p>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                           Completed
                        </span>
                     </div>

                     {/* Order Item */}
                     <div className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                        <div>
                           <h4 className="text-theme-dark font-semibold">
                              SEO Optimization
                           </h4>
                           <p className="text-theme-medium text-sm">
                              Ordered by: Emma Davis
                           </p>
                           <p className="text-theme-medium text-sm">
                              Due: May 20, 2025
                           </p>
                        </div>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                           Pending
                        </span>
                     </div>

                     {/* Order Item */}
                     <div className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                        <div>
                           <h4 className="text-theme-dark font-semibold">
                              Brand Identity Package
                           </h4>
                           <p className="text-theme-medium text-sm">
                              Ordered by: Robert Chen
                           </p>
                           <p className="text-theme-medium text-sm">
                              Completed: May 15, 2025
                           </p>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                           Completed
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
