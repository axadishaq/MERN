import React from "react";

export const ServiceCard = () => {
   return (
      <div>
         <section class="bg-theme-light py-16 px-4 md:px-8">
            <div class="max-w-7xl mx-auto">
               {/* <!-- Section Header --> */}
               <div class="text-center mb-12">
                  <h2 class="text-3xl md:text-4xl font-bold text-theme-dark mb-4">
                     Our DJ Services
                  </h2>
                  <p class="text-theme-medium text-lg max-w-2xl mx-auto">
                     Choose from our professional DJ packages for your next
                     event
                  </p>
               </div>

               {/* <!-- Cards Container --> */}
               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* <!-- Card 1 --> */}
                  <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                     <div class="relative">
                        <img
                           src="/api/placeholder/400/300"
                           alt="DJ Performance"
                           class="w-full h-64 object-cover"
                        />
                        <div class="absolute bottom-0 left-0 bg-theme-dark bg-opacity-70 text-white p-2 flex items-center">
                           <div class="rounded-full bg-theme-medium p-1 mr-2"></div>
                           <span class="text-sm">sea</span>
                        </div>
                     </div>

                     <div class="p-6">
                        <h3 class="text-xl font-semibold text-theme-dark mb-2">
                           Gig 1 Desc
                        </h3>
                        <div class="flex items-center mb-4">
                           <div class="flex text-yellow-400">
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                           </div>
                           <span class="text-theme-medium ml-1">5</span>
                        </div>

                        <div class="flex justify-between items-center mt-4">
                           <button class="text-theme-medium hover:text-theme-accent">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-6 w-6"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                 />
                              </svg>
                           </button>
                           <div class="text-right">
                              <p class="text-xs text-theme-medium">
                                 STARTING AT
                              </p>
                              <p class="text-xl font-bold text-theme-dark">
                                 $ 259
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* <!-- Card 2 --> */}
                  <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                     <div class="relative">
                        <img
                           src="/api/placeholder/400/300"
                           alt="DJ Performance"
                           class="w-full h-64 object-cover"
                        />
                        <div class="absolute bottom-0 left-0 bg-theme-dark bg-opacity-70 text-white p-2 flex items-center">
                           <div class="rounded-full bg-theme-medium p-1 mr-2"></div>
                           <span class="text-sm">sea</span>
                        </div>
                     </div>

                     <div class="p-6">
                        <h3 class="text-xl font-semibold text-theme-dark mb-2">
                           Gig 2 Desc
                        </h3>
                        <div class="flex items-center mb-4">
                           <div class="flex text-yellow-400">
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span class="text-gray-300">★</span>
                           </div>
                           <span class="text-theme-medium ml-1">4</span>
                        </div>

                        <div class="flex justify-between items-center mt-4">
                           <button class="text-theme-medium hover:text-theme-accent">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-6 w-6"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                 />
                              </svg>
                           </button>
                           <div class="text-right">
                              <p class="text-xs text-theme-medium">
                                 STARTING AT
                              </p>
                              <p class="text-xl font-bold text-theme-dark">
                                 $ 259
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* <!-- Card 3 --> */}
                  <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                     <div class="relative">
                        <img
                           src="/api/placeholder/400/300"
                           alt="DJ Performance"
                           class="w-full h-64 object-cover"
                        />
                        <div class="absolute bottom-0 left-0 bg-theme-dark bg-opacity-70 text-white p-2 flex items-center">
                           <div class="rounded-full bg-theme-medium p-1 mr-2"></div>
                           <span class="text-sm">sea</span>
                        </div>
                     </div>

                     <div class="p-6">
                        <h3 class="text-xl font-semibold text-theme-dark mb-2">
                           I will videos for youtube channel
                        </h3>
                        <div class="flex items-center mb-4">
                           <div class="flex text-yellow-400">
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span class="text-gray-300">★</span>
                              <span class="text-gray-300">★</span>
                           </div>
                           <span class="text-theme-medium ml-1">3</span>
                        </div>

                        <div class="flex justify-between items-center mt-4">
                           <button class="text-theme-medium hover:text-theme-accent">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-6 w-6"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                 />
                              </svg>
                           </button>
                           <div class="text-right">
                              <p class="text-xs text-theme-medium">
                                 STARTING AT
                              </p>
                              <p class="text-xl font-bold text-theme-dark">
                                 $ 9
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Multiple Gig Cards in a Grid Layout --> */}
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6 bg-theme-light">
            {/* <!-- Card 1 --> */}
            <a href="/gig/123" class="block transition-all">
               <div class="bg-white rounded-lg overflow-hidden shadow-lg duration-300 hover:transform hover:scale-103">
                  {/* <!-- Gig Cover Image --> */}
                  <div class="relative h-46">
                     <img
                        src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg"
                        alt="Gig Cover"
                        class="w-full h-full object-cover"
                     />
                  </div>

                  {/* <!-- Info Section --> */}
                  <div class="p-4 bg-white">
                     {/* <!-- User Info --> */}
                     <div class="flex items-center gap-2 mb-3">
                        <img
                           src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                           alt="User"
                           class="w-8 h-8 rounded-full object-cover"
                        />
                        <span class="text-sm text-theme-dark font-medium">
                           sea
                        </span>
                     </div>

                     {/* <!-- Description --> */}
                     <h1 class="text-theme-dark font-semibold mb-3 text-lg line-clamp-2">
                        Gig 1 title
                     </h1>
                     <p class="text-theme-light  text-sm line-clamp-2">
                        Gig 1 Desc this is a gig and very important dig hbd wed.
                     </p>
                  </div>

                  {/* <!-- Divider --> */}
                  <hr class="border-theme-accent" />

                  {/* <!-- Detail Section --> */}
                  <div class="p-4 flex justify-between items-center">
                     <div class="text-right">
                        <span class="text-xs text-theme-medium block">
                           STARTING FROM
                        </span>
                        <h2 class="text-xl font-bold text-theme-dark">
                           Rs. 259
                        </h2>
                     </div>
                     {/* <!-- Rating --> */}
                     <div class="flex items-center gap-1">
                        <div class="flex text-yellow-400">
                           <span>★</span>
                        </div>
                        <span class="text-theme-medium text-sm">5</span>
                     </div>
                  </div>
               </div>
            </a>

            {/* <!-- Card 2 --> */}
            <a href="/gig/123" class="block transition-all">
               <div class="bg-white rounded-lg overflow-hidden shadow-lg duration-300 hover:transform hover:scale-103">
                  {/* <!-- Gig Cover Image --> */}
                  <div class="relative h-46">
                     <img
                        src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg"
                        alt="Gig Cover"
                        class="w-full h-full object-cover"
                     />
                  </div>

                  {/* <!-- Info Section --> */}
                  <div class="p-4 bg-white">
                     {/* <!-- User Info --> */}
                     <div class="flex items-center gap-2 mb-3">
                        <img
                           src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                           alt="User"
                           class="w-8 h-8 rounded-full object-cover"
                        />
                        <span class="text-sm text-theme-dark font-medium">
                           sea
                        </span>
                     </div>

                     {/* <!-- Description --> */}
                     <h1 class="text-theme-dark font-semibold mb-3 text-lg line-clamp-2">
                        Gig 1 title
                     </h1>
                     <p class="text-theme-light  text-sm line-clamp-2">
                        Gig 1 Desc this is a gig and very important dig hbd wed.
                     </p>
                  </div>

                  {/* <!-- Divider --> */}
                  <hr class="border-theme-accent" />

                  {/* <!-- Detail Section --> */}
                  <div class="p-4 flex justify-between items-center">
                     <div class="text-right">
                        <span class="text-xs text-theme-medium block">
                           STARTING FROM
                        </span>
                        <h2 class="text-xl font-bold text-theme-dark">
                           Rs. 259
                        </h2>
                     </div>
                     {/* <!-- Rating --> */}
                     <div class="flex items-center gap-1">
                        <div class="flex text-yellow-400">
                           <span>★</span>
                        </div>
                        <span class="text-theme-medium text-sm">5</span>
                     </div>
                  </div>
               </div>
            </a>

            {/* <!-- Card 3 --> */}
            
         </div>
      </div>
   );
};
