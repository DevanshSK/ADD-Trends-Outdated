import { motion } from "framer-motion";

export default function Product({ product }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      className=" max-w-[280px] sm:max-w-[340px] justify-self-center shadow-[rgba(0,0,0,0.1)_0px_4px_12px] bg-[linear-gradient(145deg,_#ececec,_#ffffff)] rounded-xl mt-10"
    >
      <div className="aspect-[5/4] p-5">
        <img
          src={product.images[0]}
          alt=""
          className="w-full h-full object-cover object-center shadow rounded-md"
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
