import React from "react";

export const ServiceCategories = () => {
   return (
      <>
         <section class="py-16 bg-white">
            <div class="container mx-auto px-4 md:px-8">
               <div class="text-center mb-12">
                  <h2 class="text-3xl font-bold text-theme-dark mb-4">
                     Popular Service Categories
                  </h2>
                  <p class="text-theme-medium max-w-2xl mx-auto">
                     Explore jobs in the most popular categories across various
                     industries and locations
                  </p>
               </div>

               <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {/* <!-- Category 1 --> */}
                  <div class="bg-theme-light p-6 rounded-xl shadow-md hover:shadow-lg/20 transition-all duration-300 hover:-translate-y-1">
                     <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-6 w-6 text-theme-accent"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor">
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                           />
                        </svg>
                     </div>
                     <h3 class="font-semibold text-xl mb-2">Technology</h3>
                     <p class="text-theme-medium mb-4">
                        Software, IT, Data, Hardware, AI, Cloud Solutions
                     </p>
                     <p class="text-theme-accent font-medium">1,200+ Jobs</p>
                  </div>

                  {/* <!-- Category 2 --> */}
                  <div class="bg-theme-light p-6 rounded-xl shadow-md  hover:shadow-lg/20 transition-all duration-300 hover:-translate-y-1">
                     <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-6 w-6 text-theme-accent"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor">
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                           />
                        </svg>
                     </div>
                     <h3 class="font-semibold text-xl mb-2">Finance</h3>
                     <p class="text-theme-medium mb-4">
                        Banking, Accounting, Investment, Analysis, Insurance
                     </p>
                     <p class="text-theme-accent font-medium">850+ Jobs</p>
                  </div>

                  {/* <!-- Category 3 --> */}
                  <div class="bg-theme-light p-6 rounded-xl shadow-md  hover:shadow-lg/20 transition-all duration-300 hover:-translate-y-1">
                     <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-6 w-6 text-theme-accent"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor">
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                           />
                        </svg>
                     </div>
                     <h3 class="font-semibold text-xl mb-2">Marketing</h3>
                     <p class="text-theme-medium mb-4">
                        Digital, Social Media, Content, Brand Management
                     </p>
                     <p class="text-theme-accent font-medium">750+ Jobs</p>
                  </div>

                  {/* <!-- Category 4 --> */}
                  <div class="bg-theme-light p-6 rounded-xl shadow-md  hover:shadow-lg/20 transition-all duration-300 hover:-translate-y-1">
                     <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-6 w-6 text-theme-accent"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor">
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                           />
                        </svg>
                     </div>
                     <h3 class="font-semibold text-xl mb-2">Healthcare</h3>
                     <p class="text-theme-medium mb-4">
                        Medical, Nursing, Therapy, Research, Administration
                     </p>
                     <p class="text-theme-accent font-medium">950+ Jobs</p>
                  </div>
               </div>

               <div class="text-center mt-10">
                  <a
                     href="#"
                     class="inline-flex items-center text-theme-accent hover:text-theme-dark font-medium">
                     Browse All Categories
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                           fill-rule="evenodd"
                           d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                           clip-rule="evenodd"
                        />
                     </svg>
                  </a>
               </div>
            </div>
         </section>
      </>
   );
};
