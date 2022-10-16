import Product from "./Product";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductGallery({
  products,
  setFiltered,
  activeCat,
  setActiveCat,
  filtered,
}) {
  return (
    <div>
      <Filter
        products={products}
        setFiltered={setFiltered}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
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
