import React, { useState } from "react";

export const AddService = () => {
   const [formData, setFormData] = useState({});
   const [coverImage, setCoverImage] = useState(null);
   const [uploadImages, setUploadImages] = useState([]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleFileChange = (e, isMultiple = false) => {
      if (isMultiple) {
         setUploadImages(Array.from(e.target.files));
      } else {
         setCoverImage(e.target.files[0]);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ ...formData, coverImage, uploadImages });
   };

   return (
      <div className=" min-h-screen bg-theme-light  flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-full text-md">
         <div className="mt-20 text-xl font-bold text-theme-dark mb-8">
            <h1>Post a new Service</h1>
         </div>
         <form
            onSubmit={handleSubmit}
            className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
               <label className="block text-xl font-semibold text-theme-dark">
                  Title
               </label>
               <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  className="mt-5 block w-full rounded-lg border border-theme-accent shadow-sm p-3"
                  placeholder="e.g. I will do something I'm really good at"
               />

               <label className="block mt-8 text-xl font-semibold text-theme-dark">
                  Category
               </label>
               <select
                  name="category"
                  id="category"
                  onChange={handleChange}
                  className="mt-5 block w-full rounded-lg border border-theme-accent shadow-sm p-3">
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value={`writing`}>Writing</option>
               </select>

               <label className="block mt-8 text-xl font-semibold text-theme-dark">
                  Cover Image
               </label>
               <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                  className="mt-5 block w-full border border-theme-accent shadow-sm p-3 rounded-lg"
               />

               <label className="block mt-8 text-xl font-semibold text-theme-dark">
                  Upload Images
               </label>
               <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  className="mt-5 block w-full border border-theme-accent shadow-sm p-3 rounded-lg"
               />
               <button onClick={handleUpload}>
                  {uploading ? "uploading" : "Upload"}
               </button>
               <label className="block mt-8 text-xl font-semibold text-theme-dark">
                  Description
               </label>
               <textarea
                  name="desc"
                  id=""
                  onChange={handleChange}
                  rows="4"
                  className="mt-5 block w-full rounded-lg border border-theme-accent shadow-sm p-3"
                  placeholder="Brief descriptions to introduce your service to customers"></textarea>
            </div>

            <div>
               <label className="block text-xl font-semibold text-theme-dark">
                  Service Title
               </label>
               <input
                  type="text"
                  name="serviceTitle e.g. Tailor"
                  onChange={handleChange}
                  className="mt-5 block w-full rounded-lg border border-theme-accent shadow-sm p-3"
                  placeholder="e.g. One-page web design"
               />

               <label className="block mt-8 text-xl font-semibold text-theme-dark">
                  Short Description
               </label>
               <textarea
                  name="shortDescription"
                  onChange={handleChange}
                  rows="3"
                  className="mt-5 block w-full rounded-lg border border-theme-accent shadow-sm p-3"
                  placeholder="Short description of your service"></textarea>

               <label className="block mt-8 text-xl font-semibold text-theme-dark">
                  Delivery Time
               </label>
               <input
                  type="number"
                  name="deliveryTime"
                  onChange={handleChange}
                  className="mt-5 block w-full rounded-lg border border-theme-accent shadow-sm p-3"
                  placeholder="e.g. 3 days"
               />

               <label className="block mt-8 text-xl font-semibold text-theme-dark">
                  Revision Number
               </label>
               <input
                  type="number"
                  name="revisionNumber"
                  onChange={handleChange}
                  className="mt-5 block w-full rounded-lg border border-theme-accent shadow-sm p-3"
               />

               <label className="block mt-8 text-xl font-semibold text-theme-dark">
                  Add Features
               </label>
               <form action="" onSubmit={handleFeature}>
                  <input
                     type="text"
                     name="feature1"
                     onChange={handleChange}
                     placeholder="e.g. page design"
                     className="mt-5 block w-full rounded-lg border border-theme-accent shadow-sm p-3"
                  />{" "}
                  <button type="submit">add</button>
               </form>
               <div className="addedFeatures">
                  {state?.features?.map((f) => (
                     <div className="item" key={f}>
                        <button
                           onClick={() =>
                              dispatch({
                                 type: "REMOVE_FEATURE",
                                 payload: f,
                              })
                           }>
                           {f}
                           <span>X</span>
                        </button>
                     </div>
                  ))}
               </div>

               <label className="block mt-8 text-xl font-semibold text-theme-dark">
                  Price
               </label>
               <input
                  type="number"
                  name="price"
                  onChange={handleChange}
                  className="mt-5 block w-full rounded-lg border border-theme-accent shadow-sm p-3"
               />
            </div>

            <div className="md:col-span-2 flex justify-start">
               <button
                  type="submit"
                  className="w-full mt-8 px-5 py-3 bg-theme-accent text-white rounded-lg text-xl font-bold hover:bg-theme-dark transition">
                  Create
               </button>
            </div>
         </form>
      </div>
   );
};
