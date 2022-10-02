export default function Product({ product }) {
  return (
    <div className=" max-w-[280px] sm:max-w-[340px] justify-self-center border-black border-2 shadow-[28px_28px_45px_#d4d4d4,_-28px_-28px_45px_#ffffff] bg-[linear-gradient(145deg,_#ececec,_#ffffff)] rounded-xl mt-10">
      <div className="aspect-square p-8">
        <img
          src={product.images[0]}
          alt=""
          className="w-full h-full object-cover object-center shadow rounded-xl"
        />
      </div>
      <div className="px-8 pb-8">
        <h2>{product.title}</h2>
        <h2>{product.brand}</h2>
        <h2>{product.rating}</h2>
        <h1>&#8377;{product.price}</h1>
      </div>
    </div>
  );
}
