import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleProduct = () => {
  const data = useLoaderData()
  const { id } = useParams(); 
  console.log(data)
  console.log(id);



  const singleCraft = data && data._id === id ? data : null;

  console.log(singleCraft);
  return (
    <div>
      <h1>{singleCraft?._id}</h1>
    </div>
  );
};

export default SingleProduct;
