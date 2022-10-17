import React from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  // Fetch Slug
  const { query } = useRouter();
  // console.log("The value of query is : ", query.id);

  return (
    <section className="bg-[linear-gradient(120deg,_#fdfbfb_0%,_#ebedee_100%)] min-h-screen">
      <div className="container py-24 mx-auto px-3"></div>
    </section>
  );
};

export default ProductDetails;
