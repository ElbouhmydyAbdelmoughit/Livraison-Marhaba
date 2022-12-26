
const stripe = require("stripe")(process.env.STRIPE_API_SECRET);
const stripePayment = async (req, res) => {
  console.log("got data ", req.body.cartItems);
  const customers = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: JSON.stringify(req.body.cartItems),
    },
  });
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "mad",
        product_data: {
          name: item.title,
          images: [item.image[0]],
          description: item.description,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price*100,
      },
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer: customers.id,
    success_url: "http://localhost:3000/checkout-success",
    cancel_url: "http://localhost:3000/Cart",
  });

  res.send({ url: session.url });
};
module.exports = {
  stripePayment,
};

