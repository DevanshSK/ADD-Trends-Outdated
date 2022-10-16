import Heading from "./Heading";
import ProductGallery from "./ProductGallery";

export default function ProductSection() {
  return (
    <section className="bg-[linear-gradient(120deg,_#fdfbfb_0%,_#ebedee_100%)] ">
      <div className="container py-24 mx-auto px-3 ">
        <Heading
          tag="Our Items"
          head="Get ready fast"
          tail="Sale is coming soon."
        />
        <ProductGallery />
      </div>
    </section>
  );
}
