import { motion } from "framer-motion";

export default function Product({ product }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      className=" max-w-[280px] sm:max-w-[340px] justify-self-center  shadow-[28px_28px_45px_#d4d4d4,_-28px_-28px_45px_#ffffff] bg-[linear-gradient(145deg,_#ececec,_#ffffff)] rounded-xl mt-10"
    >
      <div className=" p-5">
        <img
          src={product.images[0]}
          alt=""
          className="w-full h-full object-contain object-center shadow rounded-md"
        />
      </div>
      <div className="px-8 pb-8">
        <h2>{product.title}</h2>
        <h2>{product.brand}</h2>
        <h2>{product.rating}</h2>
        <h1>&#8377;{product.price}</h1>
      </div>
    </motion.div>
  );
}
