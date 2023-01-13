import Head from "next/head";
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ProductSection from "../components/ProductSection";
import { useStateContext } from "../lib/context";

export default function Home() {
  const { setFiltered, setProducts, DJANGO_URL } = useStateContext();

  // // Fetch products using GET request
  // const [products, setProducts] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  // const [activeCat, setActiveCat] = useState("");

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  // const fetchProducts = async () => {
  //   const data = await fetch("https://dummyjson.com/products/");
  //   // const data = await fetch("https://dummyjson.com/products?limit=30&skip=30");
  //   const product = await data.json();
  //   console.log(data.status);
  //   console.log(product.products);
  //   setProducts(product.products);
  //   setFiltered(product.products);
  // };
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const data = await fetch(`${DJANGO_URL}/products/`);
    // const data = await fetch("https://dummyjson.com/products/");
    // const data = await fetch("https://dummyjson.com/products?limit=30&skip=30");
    const product = await data.json();
    // console.log(data.status);
    // console.log(product); // Array of products
    setProducts(product);
    setFiltered(product);
  };

  return (
    <div className="scroll-smooth">
      <Head>
        <title>ADD Trends</title>
        <meta
          name="description"
          content="This is the best store in the Universe"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="top"></div>
        <Hero />
        <About />
        <ProductSection />
      </main>
    </div>
  );
}
