import Heading from "../Heading";
import ProductGallery from "./ProductGallery";

export default function ProductSection({
  products,
  setFiltered,
  activeCat,
  setActiveCat,
  filtered,
}) {
  return (
    <section className="">
      <div className="container py-24 mx-auto px-3">
        <Heading
          tag="Our Items"
          head="Get ready fast"
          tail="Sale is coming soon."
        />
        <ProductGallery
          products={products}
          filtered={filtered}
          setFiltered={setFiltered}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      </div>
    </section>
  );
}
