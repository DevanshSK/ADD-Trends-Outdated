import { useStateContext } from "../lib/context";
import { FaShoppingCart } from "react-icons/fa";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { motion } from "framer-motion";
import getStripe from "../lib/getStripe";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";


// Animation Variants
const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};
const cards = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delayChildren: 0.4, staggerChildren: 0.1 },
  },
};

export default function Cart() {
  const {
    cartItems,
    setShowCart,
    onAdd,
    onRemove,
    totalPrice,
    calculatePrice,
  } = useStateContext();
  const { user, error, isLoading } = useUser();
  // console.log(user);
  const route = useRouter();
  // console.log(cartItems);

  // Payments;
  const handleCheckout = async () => {
    const stripePromise = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    // console.log(stripePromise);
    await stripePromise.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <motion.div
      className=" cart-wrapper fixed top-0 right-0 h-screen w-full bg-[rgba(0,0,0,0.4)] z-[100] flex justify-end"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <motion.div
        className="cart-style p-8 min-w-full md:min-w-[40rem] sm:px-20 sm:py-8 relative overflow-scroll bg-[#f1f1f1] "
        animate={{ x: "0%" }}
        initial={{ x: "50%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div className="close-cart z-[99]  md:hidden">
          <AiOutlineClose
            className="text-2xl"
            onClick={() => setShowCart(false)}
          />
        </motion.div>
        {cartItems.length < 1 && (
          <motion.div
            className="empty-div z-10 top-0 flex flex-col items-center justify-center h-[85%] w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setShowCart(false)}
          >
            <h1 className="text-2xl px-0 py-8 text-center">
              You have more shopping to do 😉
            </h1>
            <FaShoppingCart className="text-[7rem] text-[#535353]" />
          </motion.div>
        )}
        <motion.div
          className="cards"
          variants={cards}
          initial="hidden"
          animate="show"
          layout
        >
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <motion.div
                  className="card flex flex-col sm:flex-row items-start sm:items-center justify-start gap-8 rounded-2xl overflow-hidden bg-white mx-0 my-8 p-8"
                  variants={card}
                  key={item.id}
                  layout
                >
                  <img
                    className="w-full sm:w-32 aspect-square object-cover object-[center_center]"
                    src={item.image}
                    alt={item.item_name}
                  />
                  <motion.div className="card-info w-1/2">
                    <h3 className="text-base font-bold text-[#0d0d25] mb-2">
                      {item.item_name}
                    </h3>
                    <h3 className="text-base font-bold text-[#0d0d25]">
                      ₹
                      {calculatePrice(
                        item.original_mrp,
                        item.discounted_percent
                      )}
                    </h3>
                    <motion.div className="quantity flex justify-between my-4 items-center">
                      {/* flex direction : space-between */}
                      <span className="text-grey-500">Quantity</span>

                      <button
                        className="flex px-4 text-lg border-none items-center"
                        onClick={() => onRemove(item)}
                      >
                        <AiFillMinusCircle />
                      </button>
                      <p className="w-4 text-center">{item.quantity}</p>
                      <button
                        className="flex px-4 text-lg border-none items-center"
                        onClick={() => onAdd(item, 1)}
                      >
                        <AiFillPlusCircle className="text-[#0d0d25]" />
                      </button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
        </motion.div>
        {cartItems.length >= 1 && (
          <motion.div className="checkout">
            <h2 className="text-xl font-bold text-[#0d0d25]">
              Subtotal: ₹{totalPrice}
            </h2>
            {!user && <button
              onClick={() => route.push("/api/auth/login")}
              className="bg-[#0d0d25] py-[1em] px-4 w-full my-4 mx-0 text-white cursor-pointer"
            >
              Login
            </button>}

            {user && <button
              onClick={handleCheckout}
              className="bg-[#0d0d25] py-[1em] px-4 w-full my-4 mx-0 text-white cursor-pointer"
            >
              Purchase
            </button>}

          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
