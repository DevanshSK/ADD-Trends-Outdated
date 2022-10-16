import Product from "./Product";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

import { useStateContext } from "../lib/context";

export default function ProductGallery() {
  // Use context
  const { filtered } = useStateContext();

  return (
    <div>
      <Filter />
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] items-center overflow-hidden relative"
      >
        <AnimatePresence>
          {filtered.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
