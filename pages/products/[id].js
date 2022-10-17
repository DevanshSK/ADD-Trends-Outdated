import React from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../../lib/context";
import { AiFillStar } from "react-icons/ai";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const ProductDetails = () => {
  const { formattedNumber, calculatePrice } = useStateContext();

  const { products } = useStateContext();

  // Fetch Slug
  const { query } = useRouter();
  const id = Number.parseInt(query.id);
  console.log(+id, typeof +id);
  if (id === undefined) return <h1>Error</h1>;

  const currentProduct = products.find((p) => p.id === id);
  const { title, brand, price, images, description, discountPercentage } =
    currentProduct || {};
  console.log(currentProduct);

  // const item = currentProduct.at(0);
  // console.log(item.title);
  // console.log(item.brand);
  // console.log(item.thumbnail);
  // const {
  //   title,
  //   description,
  //   discountPercentage,
  //   price,
  //   brand,
  //   images,
  //   thumbnail,
  // } = item;

  // console.log(title, brand, price);

  return (
    <section className="bg-[linear-gradient(120deg,_#fdfbfb_0%,_#ebedee_100%)] min-h-screen py-16 px-[10%]">
      <div className="container py-8 mx-auto flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
        <div className="image-part aspect-square md:w-[40%]">
          <img
            className="h-full object-cover object-center shadow-[rgba(0,0,0,0.24)_0px_3px_8px] "
            src={images[0]}
            alt=""
          />
        </div>
        <div className="details-part md:w-[50%] ">
          <p className=" text-2xl main-font mb-2">{title}</p>
          <p className=" mb-2 text-base font-semibold text-gray-600">{brand}</p>
          <p className=" text-sm mb-2">{description}</p>
          <div className="flex gap-x-[6px] items-baseline  mb-2">
            <h4 className="text-lg font-semibold text-[#0d0d25]">
              &#8377;{price * 80}
            </h4>
            <p className="text-md font-medium text-gray-500 line-through">
              &#8377;{calculatePrice(price, discountPercentage)}
            </p>
            <p className="text-md font-medium text-red-500 ">
              ({Number.parseInt(discountPercentage)}% OFF)
            </p>
          </div>
          <div className="flex items-center  gap-x-2 mb-2">
            <span className="text-gray-900">Quantity</span>
            <button className="text-lg">
              <AiFillMinusCircle className="text-[#0d0d25]" />
            </button>
            <p>qty</p>
            <button className="text-lg">
              <AiFillPlusCircle className="text-[#0d0d25]" />
            </button>
          </div>
          <button className="text-base border-2 border-black w-full block py-2 text-white bg-[#0d0d25] rounded">
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
export default ProductDetails;
