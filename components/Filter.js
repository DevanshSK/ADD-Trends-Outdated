import { useEffect } from "react";

export default function Filter({
  products,
  setFiltered,
  activeCat,
  setActiveCat,
}) {
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
    <div className=" w-full">
      <div className="filter-container text-center">
        <button
          onClick={() => setActiveCat("")}
          className="border-2 border-solid border-[#ff8243] py-2 px-6 rounded-full text-[#ff8243] font-bold mr-4 min-w-[5rem] bg-white cursor-pointer focus:text-white focus:bg-[#ff8423]"
          autoFocus
        >
          All
        </button>
        <button
          onClick={() => setActiveCat("furniture")}
          className="border-2 border-solid border-[#ff8243] py-2 px-6 rounded-full text-[#ff8243] font-bold mr-4 min-w-[5rem] bg-white cursor-pointer focus:text-white focus:bg-[#ff8423]"
        >
          Furniture
        </button>
        <button
          onClick={() => setActiveCat("laptops")}
          className="border-2 border-solid border-[#ff8243] py-2 px-6 rounded-full text-[#ff8243] font-bold mr-4 min-w-[5rem] bg-white cursor-pointer focus:text-white focus:bg-[#ff8423]"
        >
          Laptops
        </button>
      </div>
    </div>
  );
}
