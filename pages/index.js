import Head from "next/head";
import React, { useState, useEffect } from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import ProductSection from "../components/Home/ProductSection";

export default function Home() {
  // Fetch products using GET request
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://dummyjson.com/products/")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data.products);
    //     setProducts(data.products);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products/");
    const product = await data.json();
    console.log(product);
  };

  // Consume the rest api here
  {
    /* {products.map((product) => {
    return (
      <div>
        <h2>{product.title}</h2>
        <h3>{product.brand}</h3>
        <p>{product.description}</p>
        <hr />
      </div>
    );
  })} */
  }

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
        <ProductSection />
      </main>
    </div>
  );
}
