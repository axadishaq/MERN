import React from "react";

export const Course = () => {
   return (
      <div>
         <div className="bg-theme-light py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
               {/* Main Job Posting */}
               <div className="flex flex-col lg:flex-row-reverse gap-8">
                  {/* Job Summary Card (Sticky) */}
                  <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
                     {/* <!-- Course Card  --> */}
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
                  </div>

                  {/* Job Details */}
                  <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6">
                     <h3 className="text-2xl font-bold text-theme-dark mb-4">
                        Job Description
                     </h3>
                     <p className="text-theme-medium mb-6">
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent. You will help the team design beautiful
                        interfaces that solve business challenges for our
                        clients. We work with a number of Tier 1 banks on
                        building web-based applications for AML, KYC and
                        Sanctions List management workflows. This role is ideal
                        if you are looking to segue your career into the FinTech
                        or Big Data arenas.
                     </p>

                     <h4 className="text-xl font-bold text-theme-dark mb-3">
                        Key Responsibilities
                     </h4>
                     <ul className="list-disc pl-6 text-theme-medium mb-6 space-y-2">
                        <li>
                           Be involved in every step of the product design cycle
                           from discovery to developer handoff and user
                           acceptance testing.
                        </li>
                        <li>
                           Work with BAs, product managers and tech teams to
                           lead the Product Design
                        </li>
                        <li>
                           Maintain quality of the design process and ensure
                           that when designs are translated into code they
                           accurately reflect the design specifications.
                        </li>
                        <li>
                           Accurately estimate design tickets during planning
                           sessions.
                        </li>
                        <li>
                           Contribute to sketching sessions involving
                           non-designersCreate, iterate and maintain UI
                           deliverables including sketch files, style guides,
                           high fidelity prototypes, micro interaction
                           specifications and pattern libraries.
                        </li>
                        <li>
                           Ensure design choices are data led by identifying
                           assumptions to test each sprint, and work with the
                           analysts in your team to plan moderated usability
                           test sessions.
                        </li>
                        <li>
                           Design pixel perfect responsive UI's and understand
                           that adopting common interface patterns is better for
                           UX than reinventing the wheel
                        </li>
                        <li>
                           Present your work to the wider business at Show &
                           Tell sessions.
                        </li>
                     </ul>

                     <h4 className="text-xl font-bold text-theme-dark mb-3">
                        Skill and Experience
                     </h4>
                     <ul className="list-disc pl-6 text-theme-medium space-y-2">
                        <li>
                           You have at least 3 years' experience working as a
                           Product Designer.
                        </li>
                        <li>
                           You have experience using Sketch and InVision or
                           Framer X
                        </li>
                        <li>
                           You have some previous experience working in an agile
                           environment – Think two-week sprints.
                        </li>
                        <li>
                           You are familiar using Jira and Confluence in your
                           workflow
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
