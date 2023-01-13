import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useStateContext } from "../lib/context";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Cart from "./cart";
import Hamburger from 'hamburger-react'
import User from "./user";
import {useUser} from "@auth0/nextjs-auth0/client";


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isOpen, setOpen] = useState(false);
  const {user, error, isLoading} = useUser();
  // console.log(user);

  return (
    <div className=" mx-auto bg-white px-3 z-[500] sticky top-0 left-0 right-0  shadow-lg ">
      <div className="container mx-auto px-3">
        <div className=" mx-auto h-[60px] flex flex-row items-center  justify-between   ">
          <Link href={"/#top"}>
            <span className="one  font-black text-lg cursor-pointer">
              ADD Trends
            </span>
          </Link>

          <ul className={`absolute top-[0px] shadow-lg lg:shadow-none z-[0] space-y-12 lg:space-y-0 duration-500 lg:py-0 py-[60px] flex flex-col lg:flex-row justify-center left-0 right-0 bg-white lg:static lg:flex items-center justify-self-center lg:space-x-12 ${isOpen ? "-translate-y-0" : "-translate-y-[125%]"} lg:translate-y-0 transition-all `}>
            <li className="font-bold hover:text-[#ff8243] text-{#0d0d25}">
              <Link href={"/#top"}>Home</Link>
            </li>
            <li className="font-bold hover:text-[#ff8243] text-{#0d0d25}">
              <Link href={"/#about"}>About</Link>
            </li>
            <li className="font-bold hover:text-[#ff8243] text-{#0d0d25}">
              <Link href={"/productPage"}>Products</Link>
            </li>
            <li className="font-bold hover:text-[#ff8243] text-{#0d0d25}">
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            {user && <li className="font-bold hover:text-[#ff8243] text-{#0d0d25}">
              <Link href={"/api/auth/logout"}>Logout</Link>
            </li>}
          </ul>

          <div className="two  nav-icons flex items-center space-x-5">
            
            <User/>
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
            <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
          <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
