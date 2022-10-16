import { motion } from "framer-motion";
import Link from "next/link";

export default function Product({ product }) {
  console.log(product);
  const { title, brand, rating, id, price, images, discountPercentage } =
    product;

  const calculatePrice = (discountprice, discount) => {
    let remPercentage = 100 - discount;
    return Number.parseInt((discountprice / remPercentage) * 100 * 80);
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className=" max-w-[280px] sm:max-w-[340px] justify-self-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-[linear-gradient(145deg,_#ececec,_#ffffff)] rounded-xl mt-10 px-5"
    >
      <Link href={`/products/${id}`}>
        <div>
          <div className="aspect-square py-5">
            <img
              src={images[0]}
              alt=""
              className="w-full h-full object-cover object-center shadow rounded-md shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px;]"
            />
          </div>
          <div className="px-3 pb-4">
            <h3 className="text-2xl main-font">{title}</h3>
            <h4 className="text-base font-semibold text-gray-500 my-1">
              {brand}
            </h4>
            {/* <h2>{rating}</h2> */}
            <div className="flex gap-x-2 items-baseline">
              <h4 className="text-2xl font-bold text-[#0d0d25]">
                &#8377;{price * 80}
              </h4>
              <h4 className="text-xl font-semibold text-gray-500 line-through">
                &#8377;{calculatePrice(price, discountPercentage)}
              </h4>
            </div>
          </div>
        </div>
      </Link>
      <button className="border-2 border-black w-full block py-2 mb-5 text-white bg-[#0d0d25] rounded">
        Add To Cart
      </button>
    </motion.div>
  );
}
