import React from "react";

export const Messages = () => {
   return (
      <div>
         {/* Conversation List and Message Page */}
         <div className="bg-theme-light min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
               <div className="flex flex-col lg:flex-row gap-6">
                  {/* Conversation List (Left Sidebar) */}
                  <div className="lg:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
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
                        <button className="flex-1 py-3 px-4 text-center border-b-2 border-theme-accent text-theme-dark font-medium">
                           All Messages
                        </button>
                        <button className="flex-1 py-3 px-4 text-center text-gray-500 hover:text-theme-dark">
                           Unread
                        </button>
                        <button className="flex-1 py-3 px-4 text-center text-gray-500 hover:text-theme-dark">
                           Archived
                        </button>
                     </div>

                     {/* Conversation List */}
                     <div className="overflow-y-auto max-h-[calc(100vh-240px)]">
                        {/* Active Conversation */}
                        <div className="border-l-4 border-theme-accent bg-theme-light/30 hover:bg-theme-light/50 p-4 cursor-pointer transition-colors">
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

                  {/* Message Content (Right Side) */}
                  <div className="lg:w-2/3 bg-white rounded-lg shadow-md flex flex-col">
                     {/* Conversation Header */}
                     <div className="flex items-center justify-between border-b border-gray-200 p-4">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full overflow-hidden">
                              <img
                                 src="/api/placeholder/40/40"
                                 alt="Sarah Thompson"
                                 className="w-full h-full object-cover"
                              />
                           </div>
                           <div>
                              <h3 className="font-semibold text-theme-dark">
                                 Sarah Thompson
                              </h3>
                              <span className="text-xs text-theme-medium">
                                 Online • Typically replies within an hour
                              </span>
                           </div>
                        </div>
                        <div className="flex items-center gap-2">
                           <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-5 w-5 text-theme-medium"
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
                           </button>
                           <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-5 w-5 text-theme-medium"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                 />
                              </svg>
                           </button>
                        </div>
                     </div>

                     {/* Message Container */}
                     <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[calc(100vh-280px)]">
                        {/* Date Separator */}
                        <div className="flex items-center justify-center my-4">
                           <span className="text-xs text-theme-medium bg-gray-100 px-3 py-1 rounded-full">
                              Today, May 18
                           </span>
                        </div>

                        {/* Received Message */}
                        <div className="flex items-end gap-2">
                           <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                              <img
                                 src="/api/placeholder/32/32"
                                 alt="Sarah Thompson"
                                 className="w-full h-full object-cover"
                              />
                           </div>
                           <div className="max-w-[75%]">
                              <div className="bg-gray-100 rounded-t-lg rounded-br-lg p-3">
                                 <p className="text-theme-dark">
                                    Hi there! I wanted to check in about the
                                    project timeline. Are we still on track for
                                    the website launch next month?
                                 </p>
                              </div>
                              <div className="text-xs text-theme-medium mt-1">
                                 10:15 AM
                              </div>
                           </div>
                        </div>

                        {/* Sent Message */}
                        <div className="flex items-end justify-end gap-2">
                           <div className="max-w-[75%]">
                              <div className="bg-theme-accent/20 text-theme-dark rounded-t-lg rounded-bl-lg p-3">
                                 <p>
                                    Hello Sarah! Yes, everything is moving along
                                    nicely. We've completed the design phase and
                                    are now working on development.
                                 </p>
                              </div>
                              <div className="text-xs text-theme-medium mt-1 text-right">
                                 10:20 AM
                              </div>
                           </div>
                        </div>

                        {/* Received Message */}
                        <div className="flex items-end gap-2">
                           <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                              <img
                                 src="/api/placeholder/32/32"
                                 alt="Sarah Thompson"
                                 className="w-full h-full object-cover"
                              />
                           </div>
                           <div className="max-w-[75%]">
                              <div className="bg-gray-100 rounded-t-lg rounded-br-lg p-3">
                                 <p className="text-theme-dark">
                                    That's great news! I was wondering if we
                                    could schedule a quick call this week to go
                                    over some final details?
                                 </p>
                              </div>
                              <div className="text-xs text-theme-medium mt-1">
                                 10:28 AM
                              </div>
                           </div>
                        </div>

                        {/* Received Message */}
                        <div className="flex items-end gap-2">
                           <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                              <img
                                 src="/api/placeholder/32/32"
                                 alt="Sarah Thompson"
                                 className="w-full h-full object-cover"
                              />
                           </div>
                           <div className="max-w-[75%]">
                              <div className="bg-gray-100 rounded-t-lg rounded-br-lg p-3">
                                 <p className="text-theme-dark">
                                    I'm particularly interested in discussing
                                    the content migration plan and making sure
                                    we have everything ready.
                                 </p>
                              </div>
                              <div className="text-xs text-theme-medium mt-1">
                                 10:32 AM
                              </div>
                           </div>
                        </div>

                        {/* Typing Indicator */}
                        <div className="flex items-end gap-2">
                           <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                              <img
                                 src="/api/placeholder/32/32"
                                 alt="Sarah Thompson"
                                 className="w-full h-full object-cover"
                              />
                           </div>
                           <div className="bg-gray-100 rounded-full px-4 py-2">
                              <div className="flex gap-1">
                                 <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                 <span
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}></span>
                                 <span
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.4s" }}></span>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Message Input Area */}
                     <div className="border-t border-gray-200 p-4">
                        <div className="flex items-end gap-2">
                           <button className="p-2 text-theme-medium hover:text-theme-dark transition-colors">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-6 w-6"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                 />
                              </svg>
                           </button>
                           <div className="flex-1 relative">
                              <textarea
                                 className="w-full border border-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent resize-none"
                                 placeholder="Type your message..."
                                 rows="2"></textarea>
                              <button className="absolute right-3 bottom-3 text-theme-medium hover:text-theme-dark transition-colors">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth={2}
                                       d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                 </svg>
                              </button>
                           </div>
                           <button className="bg-theme-dark hover:bg-theme-dark/90 text-white p-2 rounded-lg transition-colors">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-6 w-6"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                 />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
