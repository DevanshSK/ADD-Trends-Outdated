import React, { useContext, createContext, useState, useEffect } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  // Fetching Products Data
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

  // Parallax Effect
  const parallaxHandler = (e) => {
    // console.log(e.target);
    const imageEl = document.querySelectorAll(".parallax-img");
    imageEl.forEach((img) => {
      const speed = img.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      if (img.className.includes("image-1")) {
        img.style.scale = "0.3";
      }

      img.style.translate = `${x}px ${y}px`;
    });
  };

  // Filter.js
  // Filter the orignal products
  useEffect(() => {
    if (activeCat === "") {
      setFiltered(products);
      return;
    }
    const filtered = products.filter((item) => {
      console.log(item.category);
      return item.category === activeCat;
    });
    setFiltered(filtered);
  }, [activeCat]);

  return (
    <ShopContext.Provider
      value={{
        products,
        filtered,
        setFiltered,
        activeCat,
        setActiveCat,
        parallaxHandler,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
