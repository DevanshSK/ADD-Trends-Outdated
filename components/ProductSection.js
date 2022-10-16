import Heading from "./Heading";
import ProductGallery from "./ProductGallery";

export default function ProductSection({
  products,
  setFiltered,
  activeCat,
  setActiveCat,
  filtered,
}) {
  return (
    <section className="bg-[linear-gradient(120deg,_#fdfbfb_0%,_#ebedee_100%)] ">
      <div className="container py-24 mx-auto px-3 ">
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

// background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
