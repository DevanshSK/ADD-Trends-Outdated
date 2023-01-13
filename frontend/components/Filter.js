import { useStateContext } from "../lib/context";
import { useEffect } from "react";

export default function Filter() {
  // Use context
  const { activeCat, setActiveCat, categories, setCategories, DJANGO_URL } =
    useStateContext();
  // Categories Array

  // Fetch Categories
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    // console.log("FETCH URL", DJANGO_URL);
    const data = await fetch(`${DJANGO_URL}/ctg/`);
    // const data = await fetch("https://dummyjson.com/products/");
    // const data = await fetch("https://dummyjson.com/products?limit=30&skip=30");
    const cat = await data.json();
    // console.log(data.status);
    // console.log(cat[0]); // Array of categories
    setCategories(cat[0]);
  };

  // const categories = products.filter((product.))
  // const cats = ["", "groceries", "smartphones", "laptops"];
  // const cats = [];
  // console.log(categories);
  let cats = [];
  // console.log("These are the categories", categories);
  for (let item in categories) {
    // console.log(categories[item]);
    cats = [...cats, categories[item]];
    // console.log(cats);
  }

  // for (item of categories) {
  //   cats.push(item);
  //   console.log(cats);
  // }
  return (
    <div className=" w-full">
      <div className="filter-container flex flex-wrap items-center justify-center gap-x-4 gap-y-3 z-[99]">
        <button
          onClick={() => setActiveCat("")}
          className={
            activeCat === ""
              ? "btn-filter text-white bg-[#ff8423] focus-within:border-[#ff8243] focus-visible:border-[#ff8243] focus:outline-none outline-none"
              : "btn-filter text-[#ff8243] bg-white focus-within:border-[#ff8243] focus-visible:border-[#ff8243] focus:outline-none outline-none"
          }
          autoFocus
        >
          All
        </button>
        {cats.map((cat, index) => {
          if (cat === "Null") {
            return "";
          }
          return (
            <button
              key={index}
              onClick={() => setActiveCat(cat)}
              className={
                activeCat === cat
                  ? "btn-filter text-white bg-[#ff8423]"
                  : "btn-filter text-[#ff8243] bg-white "
              }
              autoFocus
            >
              {cat === "Null" ? "All" : cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
