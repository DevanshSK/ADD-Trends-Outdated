import Heading from "./Heading";
import ProductGallery from "./ProductGallery";
import { useEffect } from "react";
import { useStateContext } from "../lib/context";

export default function ProductSection() {
  const { setFiltered, setProducts } = useStateContext();

  // Fetching Data
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const data = await fetch("http://127.0.0.1:8000/products/");
    // const data = await fetch("https://dummyjson.com/products/");
    // const data = await fetch("https://dummyjson.com/products?limit=30&skip=30");
    const product = await data.json();
    // console.log(data.status);
    // console.log(product); // Array of products
    setProducts(product);
    setFiltered(product);
  };

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
