import { useEffect } from "react";

import { useStateContext } from "../lib/context";

export default function Filter() {
  // Use context
  const { activeCat, setActiveCat } = useStateContext();
  // Categories Array
  const categories = ["", "groceries", "smartphones", "laptops"];

  return (
    <div className=" w-full">
      <div className="filter-container flex flex-wrap items-center justify-center gap-x-4 gap-y-3 ">
        {categories.map((cat) => {
          return (
            <button
              onClick={() => setActiveCat(cat)}
              className={
                activeCat === cat
                  ? "btn-filter text-white bg-[#ff8423]"
                  : "btn-filter text-[#ff8243] bg-white "
              }
              autoFocus
            >
              {cat === "" ? "All" : cat}
            </button>
          );
        })}

        {/* <button
          onClick={() => setActiveCat("")}
          className={
            activeCat === ""
              ? "btn-filter text-white bg-[#ff8423]"
              : "btn-filter text-[#ff8243] bg-white "
          }
          autoFocus
        >
          all
        </button>
        <button
          onClick={() => setActiveCat("groceries")}
          className={
            activeCat === "groceries"
              ? "btn-filter text-white bg-[#ff8423]"
              : "btn-filter text-[#ff8243] bg-white "
          }
        >
          groceries
        </button>
        <button
          onClick={() => setActiveCat("smartphones")}
          className={
            activeCat === "smartphones"
              ? "btn-filter text-white bg-[#ff8423]"
              : "btn-filter text-[#ff8243] bg-white "
          }
        >
          smartphones
        </button>
        <button
          onClick={() => setActiveCat("laptops")}
          className={
            activeCat === "laptops"
              ? "btn-filter text-white bg-[#ff8423]"
              : "btn-filter text-[#ff8243] bg-white "
          }
        >
          laptops
        </button> */}
      </div>
    </div>
  );
}
