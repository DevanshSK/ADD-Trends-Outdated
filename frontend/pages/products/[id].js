/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../../lib/context";
// import { AiFillStar } from "react-icons/ai";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const ProductDetails = () => {
  const {
    current,
    setCurrent,
    qty,
    increaseQty,
    decreaseQty,
    onAdd,
    DJANGO_URL,
    // formattedNumber,
    calculatePrice,
  } = useStateContext();
  const [isLoading, setIsloading] = useState(true);

  // Fetch Slug
  const { query } = useRouter();
  // console.log(query);
  // const idUrl = "" + query.url;


  const fetchProducts = async () => {
    const data = await fetch(`${DJANGO_URL}/products/${query.id}/`);
    // const data = await fetch("https://dummyjson.com/products/");
    // const data = await fetch("https://dummyjson.com/products?limit=30&skip=30");
    const product = await data.json();
    // console.log("current Product",product.id);
    // if(product.id){
    //   setIsloading(false);
    // }
    // console.log(product); // Array of products
    setCurrent(product);
  };
  // fetchProducts();
    // Fetch product Details
    useEffect(() => {
      fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query.id]);
  const {
    item_name,
    brand,
    rating,
    id,
    original_mrp,
    image,
    discounted_percent,
    quantity,
    product_details,
  } = current;
  // console.log(current);

  return (
    <section className="bg-[linear-gradient(120deg,_#fdfbfb_0%,_#ebedee_100%)] min-h-[80vh] py-4 px-[10%]">
      {<div className="container py-8 mx-auto flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
        <div className="image-part aspect-square md:w-[40%]">
          <img
            className="h-full object-cover object-center shadow-[rgba(0,0,0,0.24)_0px_3px_8px] "
            src={image}
            alt=""
          />
        </div>
        <div className="details-part md:w-[50%] ">
          <p className=" text-2xl main-font mb-2">{item_name}</p>
          <p className=" mb-2 text-base font-semibold text-gray-600">{brand}</p>
          <p className=" text-sm mb-2">{product_details}</p>
          <div className="flex gap-x-[6px] items-baseline  mb-2">
            <h4 className="text-lg font-semibold text-[#0d0d25]">
              &#8377;{calculatePrice(original_mrp, discounted_percent)}
            </h4>
            <p className="text-md font-medium text-gray-500 line-through">
              &#8377;{original_mrp}
            </p>
            <p className="text-md font-medium text-red-500 ">
              ({Number.parseInt(discounted_percent)}% OFF)
            </p>
          </div>
          <div className="flex items-center  gap-x-2 mb-2">
            <span className="text-gray-900">Quantity</span>
            <button className="text-lg" onClick={decreaseQty}>
              <AiFillMinusCircle className="text-[#0d0d25]" />
            </button>
            <p>{qty}</p>
            <button className="text-lg" onClick={increaseQty}>
              <AiFillPlusCircle className="text-[#0d0d25]" />
            </button>
          </div>
          <button
            onClick={() => onAdd(current, qty)}
            className="text-base border-2 border-black w-full block py-2 text-white bg-[#0d0d25] rounded"
          >
            Add To Cart
          </button>
        </div>
      </div> }
    </section>
  );
};
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
export default ProductDetails;
