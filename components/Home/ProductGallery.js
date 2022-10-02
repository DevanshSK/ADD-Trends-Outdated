import Product from "./Product";
import Filter from "../Filter";

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
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] items-center">
        {filtered.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}
