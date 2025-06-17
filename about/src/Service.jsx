import React from "react";

export const Service = () => {
   return (
      <>
         <div className="bg-theme-light py-12 px-4 sm:px-6 lg:px-8">
            {isLoading ? (
               "Loading..."
            ) : error ? (
               "Something went wrong!"
            ) : (
               <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col">
                     <h1 className="text-3xl font-bold text-theme-dark mb-8">
                        {data.title}
                     </h1>
                     {isLoadingUser ? (
                        "loading..."
                     ) : errorUser ? (
                        "Something went wrong!"
                     ) : (
                        <div class="p-4">
                           {/* <!-- User Info --> */}
                           <div class="flex items-center gap-8 ">
                              <img
                                 src={dataUser.img || "/img/avatar.png"}
                                 alt="User"
                                 class="w-12 h-12 rounded-full object-contain"
                              />
                              <span class="text-sm text-theme-dark font-medium">
                                 {dataUser.username}
                              </span>
                           </div>
                           {!isNaN(data.totalStars / data.starNumber) && (
                              <div className="stars">
                                 {Array(
                                    Math.round(
                                       data.totalStars / data.starNumber
                                    )
                                 )
                                    .fill()
                                    .map((item, i) => (
                                       <img
                                          src="/img/star.png"
                                          alt=""
                                          key={i}
                                       />
                                    ))}

                                 <span>
                                    {Math.round(
                                       data.totalStars / data.starNumber
                                    )}
                                 </span>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  {/* Service Details Container */}
                  <div className="flex flex-col-reverse lg:flex-row gap-8">
                     {/* Service Details */}
                     <div className="lg:w-2/3">
                        {/* Main Image Gallery */}
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                           <div className=" h-100 mb-4  rounded-lg"></div>

                           <Slider
                              slidesToShow={1}
                              arrowsScroll={1}
                              className="slider">
                              {data.images.map((img) => (
                                 <img key={img} src={img} alt="" />
                              ))}
                           </Slider>
                        </div>

                        {/* Service Description */}
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                           <h3 className="text-2xl font-bold text-theme-dark mb-4">
                              Service Description
                           </h3>
                           <p className="text-theme-medium mb-6">{data.desc}</p>

                           <h4 className="text-xl font-bold text-theme-dark mb-3">
                              Features
                           </h4>
                           <ul className="list-disc pl-6 text-theme-medium mb-6 space-y-2">
                              {data.features.map((feature) => (
                                 <li key={feature}>{feature}</li>
                              ))}
                           </ul>

                           <h4 className="text-xl font-bold text-theme-dark mb-3">
                              Why Choose Our Service
                           </h4>
                           <ul className="list-disc pl-6 text-theme-medium space-y-2">
                              <li>
                                 Over 5 years of experience in delivering
                                 high-quality web solutions
                              </li>
                              <li>
                                 Portfolio of 200+ successful projects across
                                 various industries
                              </li>
                              <li>
                                 Team of certified professionals with expertise
                                 in modern web technologies
                              </li>
                              <li>
                                 Commitment to deadlines and transparent
                                 communication throughout the project
                              </li>
                           </ul>
                        </div>
                        {/* about the seller  */}
                        {isLoadingUser ? (
                           "loading..."
                        ) : errorUser ? (
                           "Something went wrong!"
                        ) : (
                           <div className="seller">
                              <h2>About The Seller</h2>
                              <div className="user">
                                 <img
                                    src={dataUser.img || "/img/avatar.png"}
                                    alt=""
                                 />
                                 <div className="info">
                                    <span>{dataUser.username}</span>
                                    {!isNaN(
                                       data.totalStars / data.starNumber
                                    ) && (
                                       <div className="stars">
                                          {Array(
                                             Math.round(
                                                data.totalStars /
                                                   data.starNumber
                                             )
                                          )
                                             .fill()
                                             .map((item, i) => (
                                                <img
                                                   src="/img/star.png"
                                                   alt=""
                                                   key={i}
                                                />
                                             ))}

                                          <span>
                                             {Math.round(
                                                data.totalStars /
                                                   data.starNumber
                                             )}
                                          </span>
                                       </div>
                                    )}

                                    <button>Contact Me</button>
                                 </div>
                              </div>
                              <div className="box">
                                 <div className="item">
                                    <span className="title">From</span>
                                    <span className="desc">
                                       {/* {dataUser.country} */}
                                    </span>
                                 </div>
                              </div>
                              <hr />
                              <p>{dataUser.desc}</p>
                           </div>
                        )}

                        {/* Reviews and Ratings */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                           <div className="flex justify-between items-center mb-6">
                              <h3 className="text-2xl font-bold text-theme-dark">
                                 Customer Reviews
                              </h3>
                              <div className="flex items-center">
                                 <div className="flex items-center mr-2">
                                    <img src="/img/star.png" alt="" />
                                 </div>
                                 <span className="text-theme-medium font-semibold">
                                    {Math.round(
                                       data.totalStars / data.starNumber
                                    )}
                                    {"("}
                                    {data.starNumber} reviews{")"}
                                 </span>
                              </div>
                           </div>

                           {/* Individual Reviews */}
                           <div className="space-y-6">
                              {/* Review 1 */}
                              <div className="border-b border-gray-200 pb-6">
                                 <div className="flex justify-between mb-2">
                                    <div className="flex items-center">
                                       <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                                          <img
                                             src="/api/placeholder/40/40"
                                             alt="Reviewer"
                                             className="w-full h-full object-cover"
                                          />
                                       </div>
                                       <div>
                                          <h4 className="font-semibold text-theme-dark">
                                             Michael Johnson
                                          </h4>
                                          <div className="flex items-center">
                                             <div className="flex">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <span className="text-theme-medium text-sm">
                                       April 12, 2025
                                    </span>
                                 </div>
                                 <p className="text-theme-medium">
                                    The web development service provided by
                                    TechCraft was exceptional. They were
                                    attentive to our needs and delivered a
                                    website that perfectly represents our brand.
                                    The entire process was smooth, and they were
                                    responsive to our feedback. Highly
                                    recommend!
                                 </p>
                              </div>

                              {/* Review 2 */}
                              <div className="border-b border-gray-200 pb-6">
                                 <div className="flex justify-between mb-2">
                                    <div className="flex items-center">
                                       <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                                          <img
                                             src="/api/placeholder/40/40"
                                             alt="Reviewer"
                                             className="w-full h-full object-cover"
                                          />
                                       </div>
                                       <div>
                                          <h4 className="font-semibold text-theme-dark">
                                             Sarah Thompson
                                          </h4>
                                          <div className="flex items-center">
                                             <div className="flex">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-gray-300"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <span className="text-theme-medium text-sm">
                                       March 28, 2025
                                    </span>
                                 </div>
                                 <p className="text-theme-medium">
                                    I'm really impressed with the quality of
                                    work and attention to detail. Our website
                                    now loads much faster and looks amazing on
                                    all devices. The team was professional and
                                    kept us informed throughout the entire
                                    process. The SEO optimization has already
                                    started to show results with improved
                                    rankings.
                                 </p>
                              </div>

                              {/* Review 3 */}
                              <div>
                                 <div className="flex justify-between mb-2">
                                    <div className="flex items-center">
                                       <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                                          <img
                                             src="/api/placeholder/40/40"
                                             alt="Reviewer"
                                             className="w-full h-full object-cover"
                                          />
                                       </div>
                                       <div>
                                          <h4 className="font-semibold text-theme-dark">
                                             David Wilson
                                          </h4>
                                          <div className="flex items-center">
                                             <div className="flex">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   className="h-4 w-4 text-yellow-400"
                                                   viewBox="0 0 20 20"
                                                   fill="currentColor">
                                                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <span className="text-theme-medium text-sm">
                                       May 5, 2025
                                    </span>
                                 </div>
                                 <p className="text-theme-medium">
                                    Working with TechCraft was a game-changer
                                    for our business. The team didn't just build
                                    a website; they created a powerful marketing
                                    tool that has significantly increased our
                                    customer engagement and conversions. The
                                    content management system is intuitive and
                                    makes updates a breeze. Worth every penny!
                                 </p>
                              </div>
                           </div>
                           <Reviews gigId={id} />
                           {/* Load More Reviews Button */}
                           <div className="mt-8 flex justify-center">
                              <button className="border border-theme-accent text-theme-accent hover:bg-theme-accent hover:text-gray-700 px-6 py-2 rounded-md transition-colors duration-300 font-medium">
                                 Load More Reviews
                              </button>
                           </div>
                        </div>
                     </div>
                     {/* Service Summary Card (Sticky) */}
                     <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
                        <div className="bg-white overflow-hidden relative p-6 rounded-xl shadow-sm hover:shadow-lg/30 transition-all duration-500">
                           <div className="absolute top-2 right-2">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-8 w-8"
                                 fill="orange"
                                 viewBox="0 0 24 24"
                                 strokeWidth="2">
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                 />
                              </svg>
                           </div>

                           {/* Price & Category Tags */}
                           <div>
                              <div className="flex gap-2">
                                 <span className="border-theme-accent border text-theme-accent px-3 py-1 rounded-md text-sm font-medium">
                                    Premium
                                 </span>
                                 <span className="border-theme-accent border text-theme-accent px-3 py-1 rounded-md text-sm font-medium">
                                    {dataUser.country}
                                 </span>
                              </div>
                           </div>

                           {/* Service Provider Logo */}
                           <div className="flex items-start justify-arround item-center mb-4 mt-4">
                              <div className="w-12 h-12 bg-gray-100 rounded my-auto flex items-center justify-center">
                                 <img
                                    src={dataUser.image}
                                    alt="Service Provider Logo"
                                    className="w-8 h-8"
                                 />
                              </div>
                              <h3 className="font-semibold text-xl m-2">
                                 {data.shortTitle}
                              </h3>
                           </div>

                           {/* Provider Info */}
                           <div className="flex items-center text-theme-medium mb-3">
                              <span></span>
                              <span className="mx-2">•</span>
                              <span>Since {data.createdAt}</span>
                           </div>
                           <div className="flex items-center text-theme-medium mb-3">
                              <img src="/img/clock.png" alt="" />
                              <span>{data.deliveryDate} Days Delivery</span>
                           </div>

                           {/* Price */}
                           <div className="flex justify-between items-center">
                              <span className="font-semibold text-theme-medium">
                                 Rs. {data.price}
                              </span>
                           </div>

                           {/* Order Button */}
                           <div className="flex justify-center items-center text-white rounded-lg mt-4 p-2 border-3 transition-all duration-500 bg-theme-dark font-bold hover:bg-theme-light hover:border-amber-900 hover:text-theme-dark">
                              <button
                                 onClick={() => handleCreateOrder()}
                                 className="">
                                 Hire Now
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </>
   );
};
