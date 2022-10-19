import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

const calculatePrice = (original_price, discount) => {
  let discounted_price = original_price - (original_price * discount) / 100;
  return Number.parseInt(discounted_price);
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create a checkout session
      console.log(req.body);
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["IN", "US", "CA"],
        },
        allow_promotion_codes: true,
        shipping_options: [
          { shipping_rate: "shr_1LuaUMSC3ULFLuHoQiwJU7Uo" },
          { shipping_rate: "shr_1LuaTMSC3ULFLuHoaoiNa5Bj" },
        ],
        line_items: req.body.map((item) => {
          console.log(item);

          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.item_name,
                images: [item.image],
              },
              unit_amount:
                calculatePrice(item.original_mrp, item.discounted_percent) *
                100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        // Success or failure page
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancelled`,
      });
      res.status(200).json(session);
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message);
    }
  }
}
