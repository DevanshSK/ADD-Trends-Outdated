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
      <div className="filter-container flex flex-wrap items-center justify-center gap-x-4 gap-y-3 ">
        <button
          onClick={() => setActiveCat("")}
          className={
            activeCat === ""
              ? "btn-filter text-white bg-[#ff8423]"
              : "btn-filter text-[#ff8243] bg-white "
          }
          autoFocus
        >
          All
        </button>
        <button
          onClick={() => setActiveCat("groceries")}
          className={
            activeCat === "groceries"
              ? "btn-filter text-white bg-[#ff8423]"
              : "btn-filter text-[#ff8243] bg-white "
          }
        >
          Groceries
        </button>
        <button
          onClick={() => setActiveCat("smartphones")}
          className={
            activeCat === "smartphones"
              ? "btn-filter text-white bg-[#ff8423]"
              : "btn-filter text-[#ff8243] bg-white "
          }
        >
          Smartphones
        </button>
        <button
          onClick={() => setActiveCat("laptops")}
          className={
            activeCat === "laptops"
              ? "btn-filter text-white bg-[#ff8423]"
              : "btn-filter text-[#ff8243] bg-white "
          }
        >
          Laptops
        </button>
      </div>
    </div>
  );
}
