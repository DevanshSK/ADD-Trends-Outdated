import React from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  // Fetch Slug
  const { query } = useRouter();
  // console.log("The value of query is : ", query.id);

  return <div>The ID of the product is {query.id}</div>;
};

export default ProductDetails;
