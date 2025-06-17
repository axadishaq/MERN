import React from "react";

export const Msg = () => {
   return (
      <>
         <div className="bg-theme-light min-h-screen py-8 px-4">
            <div className="w-full mx-auto">
               <div className="flex flex-col  gap-6">
                  {/* Conversation List (Left Sidebar) */}
                  <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                     {/* Header */}
                     <div className="bg-theme-dark text-white p-4">
                        <h2 className="text-xl font-semibold">Messages</h2>
                        <div className="mt-2 relative">
                           <input
                              type="text"
                              placeholder="Search conversations..."
                              className="w-full bg-white/10 text-white placeholder-white/60 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-theme-accent"
                           />
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 absolute right-3 top-2.5 text-white/60"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                           </svg>
                        </div>
                     </div>

                     {/* Filter Tabs */}
                     <div className="flex border-b border-gray-200">
                        <button className="flex-1 py-3 px-4 text-center border-b-2 border-theme-accent text-theme-dark font-medium hover:text-theme-dark hover:bg-theme-light">
                           All Messages
                        </button>
                        <button className="flex-1 py-3 px-4 text-center text-gray-500 hover:text-theme-dark hover:text-theme-dark hover:bg-theme-light">
                           Unread
                        </button>
                     </div>

                     {/* Conversation List */}
                     <div className="overflow-y-auto">
                        {/* Active Conversation */}
                        <div className="border-l-4 border-theme-accent bg-theme-light/30 hover:bg-theme-light p-4 cursor-pointer transition-all">
                           <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                 <img
                                    src="/api/placeholder/48/48"
                                    alt="Sarah Thompson"
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                              <div className="flex-1 min-w-0">
                                 <div className="flex justify-between items-start">
                                    <h4 className="font-semibold text-theme-dark truncate">
                                       Sarah Thompson
                                    </h4>
                                   
                                    <span className="text-xs text-theme-medium">
                                       10:32 AM
                                    </span>
                                 </div>
                                 <p className="text-theme-medium font-medium truncate">
                                    Thank you for the project update. I had a
                                    question about the timeline...
                                 </p>
                                  <button className="p-2 mt-2 bg-theme-accent rounded-lg text-white border  border-theme-medium text-xs">
                                       Mark as read
                                    </button>
                              </div>
                           </div>
                        </div>

                        {/* Unread Conversation */}
                        <div className="border-l-4 border-transparent hover:bg-gray-50 p-4 cursor-pointer transition-colors">
                           <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                 <img
                                    src="/api/placeholder/48/48"
                                    alt="David Wilson"
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                              <div className="flex-1 min-w-0">
                                 <div className="flex justify-between items-start">
                                    <h4 className="font-semibold text-theme-dark truncate">
                                       David Wilson
                                    </h4>
                                    <div className="flex flex-col items-end">
                                       <span className="text-xs text-theme-medium">
                                          Yesterday
                                       </span>
                                       <span className="w-5 h-5 bg-theme-accent rounded-full text-white text-xs flex items-center justify-center mt-1">
                                          2
                                       </span>
                                    </div>
                                 </div>
                                 <p className="text-theme-medium truncate">
                                    I've reviewed your proposal for the new
                                    website and I'm impressed...
                                 </p>
                              </div>
                           </div>
                        </div>

                        {/* Regular Conversation */}
                        <div className="border-l-4 border-transparent hover:bg-gray-50 p-4 cursor-pointer transition-colors">
                           <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                 <img
                                    src="/api/placeholder/48/48"
                                    alt="Michael Johnson"
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                              <div className="flex-1 min-w-0">
                                 <div className="flex justify-between items-start">
                                    <h4 className="font-semibold text-theme-dark truncate">
                                       Michael Johnson
                                    </h4>
                                    <span className="text-xs text-theme-medium">
                                       May 16
                                    </span>
                                 </div>
                                 <p className="text-theme-medium truncate">
                                    The design looks fantastic! Just a few minor
                                    tweaks needed...
                                 </p>
                              </div>
                           </div>
                        </div>

                        {/* Regular Conversation */}
                        <div className="border-l-4 border-transparent hover:bg-gray-50 p-4 cursor-pointer transition-colors">
                           <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                 <img
                                    src="/api/placeholder/48/48"
                                    alt="Emma Davis"
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                              <div className="flex-1 min-w-0">
                                 <div className="flex justify-between items-start">
                                    <h4 className="font-semibold text-theme-dark truncate">
                                       Emma Davis
                                    </h4>
                                    <span className="text-xs text-theme-medium">
                                       May 14
                                    </span>
                                 </div>
                                 <p className="text-theme-medium truncate">
                                    Can you send me the final invoice for the
                                    project?
                                 </p>
                              </div>
                           </div>
                        </div>

                        {/* Regular Conversation */}
                        <div className="border-l-4 border-transparent hover:bg-gray-50 p-4 cursor-pointer transition-colors">
                           <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                 <img
                                    src="/api/placeholder/48/48"
                                    alt="Robert Chen"
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                              <div className="flex-1 min-w-0">
                                 <div className="flex justify-between items-start">
                                    <h4 className="font-semibold text-theme-dark truncate">
                                       Robert Chen
                                    </h4>
                                    <span className="text-xs text-theme-medium">
                                       May 12
                                    </span>
                                 </div>
                                 <p className="text-theme-medium truncate">
                                    Looking forward to our meeting tomorrow.
                                    I've prepared some ideas...
                                 </p>
                              </div>
                           </div>
                        </div>

                        {/* Regular Conversation */}
                        <div className="border-l-4 border-transparent hover:bg-gray-50 p-4 cursor-pointer transition-colors">
                           <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                 <img
                                    src="/api/placeholder/48/48"
                                    alt="Sofia Garcia"
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                              <div className="flex-1 min-w-0">
                                 <div className="flex justify-between items-start">
                                    <h4 className="font-semibold text-theme-dark truncate">
                                       Sofia Garcia
                                    </h4>
                                    <span className="text-xs text-theme-medium">
                                       May 10
                                    </span>
                                 </div>
                                 <p className="text-theme-medium truncate">
                                    Thanks for your assistance with the
                                    troubleshooting. Everything is working...
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>{" "}
      </>
   );
};
