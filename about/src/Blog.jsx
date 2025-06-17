import React from "react";

export const Blog = () => {
   return (
      <>
         
         <div class="bg-gray-50">
            <section class="py-16 px-4">
               <div class="container mx-auto max-w-8xl">
                  {/* <!-- Header section with title and button --> */}
                  <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                     <div>
                        <h3 class="text-3xl font-bold mb-2">Blog Post</h3>
                        <p class="text-gray-600 text-lg">Featured blog posts</p>
                     </div>
                     <a
                        href="/blog"
                        class="mt-4 md:mt-0 px-6 py-2 bg-theme-light border-2 text-theme-dark font-medium rounded hover:bg-theme-accent hover:text-white transition duration-300">
                        View Blog
                     </a>
                  </div>

                  {/* <!-- Blog posts grid --> */}
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                     {/* <!-- Blog post 1 --> */}
                     <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg/30 transition duration-500 hover:-translate-y-1">
                        <a
                           href="/post/eliminate-your-fear-and-pick-up-job-today"
                           class="block">
                           <img
                              src="/api/placeholder/800/500"
                              alt="Fear blog"
                              class="w-full h-75 object-cover"
                           />
                        </a>
                        <div class="p-6">
                           <div class="mb-4">
                              <div class="flex items-center text-md text-theme-light mb-2">
                                 <span>February 10, 2020</span>
                                 <span class="mx-2">|</span>
                                 <a
                                    href="/post-category/inspiration"
                                    class="hover:text-theme-dark">
                                    Inspiration
                                 </a>
                              </div>
                              <a
                                 href="/post/eliminate-your-fear-and-pick-up-job-today"
                                 class="text-xl font-semibold text-theme-dark  block mb-4">
                                 Eliminate Your Fear And Pick Up Job Today
                              </a>
                           </div>
                           <a
                              href="/post/eliminate-your-fear-and-pick-up-job-today"
                              class="inline-block px-5 py-2 bg-theme-light border-2 text-theme-dark font-medium rounded hover:bg-theme-accent hover:text-white transition duration-300">
                              Read More
                           </a>
                        </div>
                     </div>

                     {/* <!-- Blog post 2 --> */}
                     <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg/30 transition duration-500 hover:-translate-y-1">
                        <a
                           href="/post/eliminate-your-fear-and-pick-up-job-today"
                           class="block">
                           <img
                              src="/api/placeholder/800/500"
                              alt="Fear blog"
                              class="w-full h-75 object-cover"
                           />
                        </a>
                        <div class="p-6">
                           <div class="mb-4">
                              <div class="flex items-center text-md text-theme-light mb-2">
                                 <span>February 10, 2020</span>
                                 <span class="mx-2">|</span>
                                 <a
                                    href="/post-category/inspiration"
                                    class="hover:text-theme-dark">
                                    Inspiration
                                 </a>
                              </div>
                              <a
                                 href="/post/eliminate-your-fear-and-pick-up-job-today"
                                 class="text-xl font-semibold text-theme-dark  block mb-4">
                                 Eliminate Your Fear And Pick Up Job Today
                              </a>
                           </div>
                           <a
                              href="/post/eliminate-your-fear-and-pick-up-job-today"
                              class="inline-block px-5 py-2 bg-theme-light border-2 text-theme-dark font-medium rounded hover:bg-theme-accent hover:text-white transition duration-300">
                              Read More
                           </a>
                        </div>
                     </div>

                     {/* <!-- Blog post 3 --> */}
                     <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg/30 transition duration-500 hover:-translate-y-1">
                        <a
                           href="/post/eliminate-your-fear-and-pick-up-job-today"
                           class="block">
                           <img
                              src="/api/placeholder/800/500"
                              alt="Fear blog"
                              class="w-full h-75 object-cover"
                           />
                        </a>
                        <div class="p-6">
                           <div class="mb-4">
                              <div class="flex items-center text-md text-theme-light mb-2">
                                 <span>February 10, 2020</span>
                                 <span class="mx-2">|</span>
                                 <a
                                    href="/post-category/inspiration"
                                    class="hover:text-theme-dark">
                                    Inspiration
                                 </a>
                              </div>
                              <a
                                 href="/post/eliminate-your-fear-and-pick-up-job-today"
                                 class="text-xl font-semibold text-theme-dark  block mb-4">
                                 Eliminate Your Fear And Pick Up Job Today
                              </a>
                           </div>
                           <a
                              href="/post/eliminate-your-fear-and-pick-up-job-today"
                              class="inline-block px-5 py-2 bg-theme-light border-2 text-theme-dark font-medium rounded hover:bg-theme-accent hover:text-white transition duration-300">
                              Read More
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};
