// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";

// const UpdateProduct = ({ location }) => {
//   const { state: { product } = {} } = location;
//   const [formData, setFormData] = useState({
//     name: product.name || "",
//     price: product.price || "",
//     category: product.category || "",
//     description: product.description || "",
//     image: product.image || "",
//     hoveredImg: product.hoveredImg || "",
//   });

//   const history = useHistory();

//   const handleUpdate = async () => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/products/${product._id}`,
//         formData
//       );
//       console.log("Product updated successfully:", response.data);
   
//       history.push("/myList");
//     } catch (error) {
//       console.error("Error updating product:", error);

//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleUpdate();
//   };

//   return (
//     <>
//       <section className="bg-white dark:bg-gray-900">
//         <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
//           <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
//             Update Craft Item
//           </h2>
//           <form onSubmit={handleSubmit}>
//             <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Craft Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={formData?.name}
//                   onChange={handleChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Enter craft name"
//                   required
//                 />
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="price"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Price (in USD)
//                 </label>
//                 <input
//                   type="number"
//                   name="price"
//                   id="price"
//                   value={formData?.price}
//                   onChange={handleChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Enter price"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="category"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Select Category
//                 </label>
//                 <select
//                   id="category"
//                   name="category"
//                   value={formData?.category}
//                   onChange={handleChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                 >
//                   <option value={product?.category}>
//                     {product?.category}
//                   </option>
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="description"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={formData?.description}
//                   onChange={handleChange}
//                   rows="8"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Enter craft description"
//                 ></textarea>
//               </div>
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="image"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Photo URL
//                 </label>
//                 <input
//                   type="text"
//                   name="image"
//                   id="image"
//                   value={formData?.image}
//                   onChange={handleChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Enter photo URL"
//                   required
//                 />
//               </div>
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="hovered"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Hovered Photo URL (Optional)
//                 </label>
//                 <input
//                   type="text"
//                   name="hovered"
//                   id="hovered"
//                   value={formData?.hoveredImg}
//                   onChange={handleChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Enter photo URL"
//                 />
//               </div>
//             </div>
//             <button type="submit" className="mt-4 sm:mt-6 btn btn-primary">
//               Update Craft
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default UpdateProduct;
