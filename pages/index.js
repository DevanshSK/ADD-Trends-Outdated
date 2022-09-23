import Head from "next/head";
import React, { useState, useEffect } from "react";
import Hero from "../components/Home/Hero";

export default function Home() {
  // Fetch products using GET request
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
    <div>
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
      </main>
    </div>
  );
}
