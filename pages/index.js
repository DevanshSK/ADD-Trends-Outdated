import Head from "next/head";
import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ProductSection from "../components/ProductSection";

export default function Home() {
  // Fetch products using GET request
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCat, setActiveCat] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products/");
    // const data = await fetch("https://dummyjson.com/products?limit=30&skip=30");
    const product = await data.json();
    console.log(data.status);
    console.log(product.products);
    setProducts(product.products);
    setFiltered(product.products);
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
        <Hero />
        <About />
        <ProductSection
          products={products}
          filtered={filtered}
          setFiltered={setFiltered}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      </main>
    </div>
  );
}
