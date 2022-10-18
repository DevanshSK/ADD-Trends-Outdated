import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useStateContext } from "../lib/context";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Cart from "./cart";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className=" mx-auto bg-[hsla(0,0%,100%,.8)] backdrop-blur px-3 z-[99] sticky top-0 left-0 right-0  shadow-lg ">
      <div className="container mx-auto px-3">
        <div className=" mx-auto min-h-[12vh] flex flex-row items-center  justify-between   ">
          <Link href={"/"}>
            <span className="one  font-black text-lg cursor-pointer">
              ADD Trends
            </span>
          </Link>
          <div className="two  nav-icons">
            <div
              className="flex flex-col items-center relative cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              {totalQuantities > 0 && (
                <motion.span
                  animate={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  className="absolute -top-[20%] -right-[10%] bg-orange-500 text-white w-[1.2rem] h-[1.2rem] flex items-center justify-center rounded-full text-[0.65rem] pointer-events-none"
                >
                  {totalQuantities}
                </motion.span>
              )}
              <FiShoppingBag className="text-lg" />
              <span className="text-sm font-semibold text-gray-600">Cart</span>
            </div>
          </div>
          <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
