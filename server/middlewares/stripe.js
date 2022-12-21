const stripe = require('stripe')(process.env.STRIPE_API_SECRET)

const stripePayment = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/checkout-session',
      cancel_url: 'http://localhost:3000/Cart',
    });
  
    res.send({url:session.url});
  };
module.exports ={
    stripePayment
}