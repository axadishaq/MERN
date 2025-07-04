import React from "react";

export const Courses = () => {
   return (
      <>
         <div class="bg-gray-50 h-auto">
            {/* <!-- Job Category Filter Section --> */}
            <section class="py-12 px-4">
               <div class="max-w-5xl mx-auto">
                  <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
                     Find Your Favorite Skill
                  </h1>

                  <div class="flex flex-wrap justify-center gap-3 md:gap-4">
                     {/* <!-- Customer Services --> */}
                     <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition-colors duration-200 ease-in-out">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5"
                           viewBox="0 0 20 20"
                           fill="currentColor">
                           <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.358-.035-.708-.101-1.047A5 5 0 0010 11z"
                              clip-rule="evenodd"
                           />
                        </svg>
                        <span class="font-medium">Customer Services</span>
                     </button>

                     {/* <!-- Project Management --> */}
                     <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition-colors duration-200 ease-in-out">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5"
                           viewBox="0 0 20 20"
                           fill="currentColor">
                           <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clip-rule="evenodd"
                           />
                        </svg>
                        <span class="font-medium">Project Management</span>
                     </button>

                     {/* <!-- Development --> */}
                     <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition-colors duration-200 ease-in-out">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5"
                           viewBox="0 0 20 20"
                           fill="currentColor">
                           <path
                              fill-rule="evenodd"
                              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                              clip-rule="evenodd"
                           />
                        </svg>
                        <span class="font-medium">Development</span>
                     </button>

                     {/* <!-- Design --> */}
                     <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition-colors duration-200 ease-in-out">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5"
                           viewBox="0 0 20 20"
                           fill="currentColor">
                           <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                           <path
                              fill-rule="evenodd"
                              d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                              clip-rule="evenodd"
                           />
                        </svg>
                        <span class="font-medium">Design</span>
                     </button>
                  </div>

                  <div class="flex flex-wrap justify-center gap-3 md:gap-4 mt-3 md:mt-4">
                     {/* <!-- Marketing --> */}
                     <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition-colors duration-200 ease-in-out">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5"
                           viewBox="0 0 20 20"
                           fill="currentColor">
                           <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <span class="font-medium">Marketing</span>
                     </button>

                     {/* <!-- Accounting / Finance --> */}
                     <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition-colors duration-200 ease-in-out">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5"
                           viewBox="0 0 20 20"
                           fill="currentColor">
                           <path
                              fill-rule="evenodd"
                              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd"
                           />
                        </svg>
                        <span class="font-medium">Accounting / Finance</span>
                     </button>
                  </div>
               </div>
            </section>
         </div>
         <section class="py-16 bg-gray-50">
            <div class="container mx-auto px-4 md:px-8">
               <div class="flex justify-between items-center mb-12">
                  <div>
                     <h2 class="text-3xl font-bold text-theme-dark">
                        Featured Courses
                     </h2>
                     <p class="text-theme-medium mt-2">
                        Handpicked Courses featured for you
                     </p>
                  </div>
                  <a
                     href="#"
                     class="hidden md:flex items-center text-theme-accent hover:text-theme-medium font-medium">
                     View All Courses
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

               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {/* <!-- Job /Card 1 --> */}
                  <div class="bg-white overflow-hidden relative p-6 rounded-xl shadow-sm hover:shadow-lg/30 hover:-translate-y-2  transition-all duration-500">
                     <div class="absolute top-2 right-2">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-8 w-8 "
                           fill="orange"
                           viewBox="0 0 24 24"
                           stroke-width="2">
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                           />
                        </svg>
                     </div>
                     <div>
                        <div className="flex gap-2">
                           <span class="border-theme-accent border text-theme-accent px-3 py-1 rounded-md text-sm font-medium">
                              Full-time
                           </span>
                           <span class="border-theme-accent border text-theme-accent px-3 py-1 rounded-md text-sm font-medium">
                              Multan
                           </span>
                        </div>
                     </div>
                     <div class="flex items-start justify-arround item-center mb-4 mt-4">
                        <div class="w-12 h-12 bg-gray-100 rounded my-auto">
                           <img
                              src="/api/placeholder/48/48"
                              alt="Google Logo"
                              class="w-8 h-8"
                           />
                        </div>
                        <h3 class="font-semibold text-xl m-2">
                           Senior UI/UX Designer
                        </h3>
                     </div>
                     <div class="flex items-center text-theme-medium mb-3">
                        <span>Google Inc.</span>
                        <span class="mx-2">•</span>
                        <span>San Francisco, CA</span>
                     </div>
                     <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-gray-100 text-theme-medium px-3 py-1 rounded-full text-sm">
                           Category
                        </span>
                     </div>
                     <div class="flex justify-between items-center">
                        <span class="font-semibold text-theme-medium">
                           $120k - $150k
                        </span>
                     </div>
                     <div class="flex justify-center items-center  text-white rounded-lg mt-4 p-2 border-3 transition-all duration-500 bg-theme-dark font-bold  hover:bg-theme-light hover:border-amber-900 hover:text-theme-dark">
                        <a href="#" class=" ">
                           Enroll Now
                        </a>
                     </div>
                  </div>

                  {/* <!-- Job Card 2 --> */}
                  <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg/30 hover:-translate-y-2  transition-all duration-500">
                     <div>
                        <div className="flex gap-2">
                           <span class="border-theme-accent border text-theme-accent px-3 py-1 rounded-md text-sm font-medium">
                              Full-time
                           </span>
                           <span class="border-theme-accent border text-theme-accent px-3 py-1 rounded-md text-sm font-medium">
                              Multan
                           </span>
                        </div>
                     </div>
                     <div class="flex items-start justify-arround item-center mb-4 mt-4">
                        <div class="w-12 h-12 bg-gray-100 rounded my-auto">
                           <img
                              src="/api/placeholder/48/48"
                              alt="Google Logo"
                              class="w-8 h-8"
                           />
                        </div>
                        <h3 class="font-semibold text-xl m-2">
                           Senior UI/UX Designer
                        </h3>
                     </div>
                     <div class="flex items-center text-theme-medium mb-3">
                        <span>Google Inc.</span>
                        <span class="mx-2">•</span>
                        <span>San Francisco, CA</span>
                     </div>
                     <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-gray-100 text-theme-medium px-3 py-1 rounded-full text-sm">
                           Category
                        </span>
                     </div>
                     <div class="flex justify-between items-center">
                        <span class="font-semibold text-theme-medium">
                           $120k - $150k
                        </span>
                     </div>
                     <div class="flex justify-center items-center  text-white rounded-lg mt-4 p-2 border-3 transition-all duration-500 bg-theme-dark font-bold  hover:bg-theme-accent hover:border-amber-900 hover:text-theme-dark">
                        <a href="#" class=" ">
                           Enroll Now
                        </a>
                     </div>
                  </div>

                  {/* <!-- Job Card 3 --> */}
                  <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg/30 hover:-translate-y-2  transition-all duration-500">
                     <div>
                        <div className="flex gap-2">
                           <span class="border-theme-accent border text-theme-accent px-3 py-1 rounded-md text-sm font-medium">
                              Full-time
                           </span>
                           <span class="border-theme-accent border text-theme-accent px-3 py-1 rounded-md text-sm font-medium">
                              Multan
                           </span>
                        </div>
                     </div>
                     <div class="flex items-start justify-arround item-center mb-4 mt-4">
                        <div class="w-12 h-12 bg-gray-100 rounded my-auto">
                           <img
                              src="/api/placeholder/48/48"
                              alt="Google Logo"
                              class="w-8 h-8"
                           />
                        </div>
                        <h3 class="font-semibold text-xl m-2">
                           Senior UI/UX Designer
                        </h3>
                     </div>
                     <div class="flex items-center text-theme-medium mb-3">
                        <span>Google Inc.</span>
                        <span class="mx-2">•</span>
                        <span>San Francisco, CA</span>
                     </div>
                     <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-gray-100 text-theme-medium px-3 py-1 rounded-full text-sm">
                           Category
                        </span>
                     </div>
                     <div class="flex justify-between items-center">
                        <span class="font-semibold text-theme-medium">
                           $120k - $150k
                        </span>
                     </div>
                     <div class="flex justify-center items-center  text-white rounded-lg mt-4 p-2 border-3 transition-all duration-500 bg-theme-dark font-bold  hover:bg-theme-light hover:border-amber-900 hover:text-theme-dark">
                        <a href="#" class=" ">
                           Enroll Now
                        </a>
                     </div>
                  </div>
               </div>

               <div class="text-center mt-10 md:hidden">
                  <a
                     href="#"
                     class="inline-flex items-center text-theme-accent hover:text-theme-medium font-medium">
                     View All Courses
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
