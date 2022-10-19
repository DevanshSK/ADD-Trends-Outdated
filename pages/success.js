import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

function success({ order }) {
  const route = useRouter();
  // console.log(order);
  return (
    <div className=" bg-[#f1f1f1] wrapper  pt-8 px-4">
      <motion.div
        className="card container mx-auto bg-white p-10 m-4 max-w-screen-md rounded-2xl shadow-xl mb-0 sm:px-12 md:px-28"
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.75 } }}
        initial={{ opacity: 0, scale: 0.75 }}
      >
        <h1 className="text-3xl text-center font-black mt-4 mb-4">
          Thank You for placing your order!!
        </h1>
        <h2 className="text-center text-lg font-bold text-gray-600 my-[1em]">
          A confirmation email has been sent to
        </h2>
        <h2 className="text-center text-base sm:text-lg font-black text-gray-600 mb-[0.5em]">
          {order.customer_details.email}
        </h2>
        <div className="info-wrapper gap-y-8 mt-8 flex sm:flex-row flex-col justify-between">
          <div className="address">
            <h3 className="text-lg font-bold text-gray-600">Address</h3>
            {Object.entries(order.customer_details.address).map(
              ([key, val]) => (
                <p className="" key={key}>
                  <span className="">{key}</span> : <span>{val}</span>
                </p>
              )
            )}
          </div>

          <div className="order-info">
            <h3 className="text-lg font-bold text-gray-600 gap">Products</h3>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>Product : {item.description}</p>
                <p>Quantity : {item.quantity}</p>
                {/* <p>Price : {item.price.unit_amount / 100}</p> */}
              </div>
            ))}
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.96 }}
          className=" w-full py-3 text-lg font-bold mt-8 max-w-md text-white bg-[#0d0d0d] block mx-auto rounded-md"
          onClick={() => route.push("/")}
        >
          Continue Shopping
        </motion.button>
      </motion.div>
    </div>
  );
}

export default success;
