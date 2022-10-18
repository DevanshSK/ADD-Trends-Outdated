import { useStateContext, products } from "../lib/context";

export default function Filter() {
  // Use context
  const { activeCat, setActiveCat } = useStateContext();
  // Categories Array
  // const categories = products.filter((product.))
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
      </div>
    </div>
  );
}
