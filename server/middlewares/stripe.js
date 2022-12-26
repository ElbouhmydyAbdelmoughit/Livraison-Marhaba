const stripe = require('stripe')(process.env.STRIPE_API_SECRET)
const stripePayment = async (req, res) => {
  const customers = await stripe.customer.create({
    metadata:{
       userId:req.body.userId,
       cart:JSON.stringify(req.body.cartItem)
    }})
    const line_items = req.body.cartItem.map((item) => {
      return {
        price_data: {
          currency: "mad",
          product_data: {
            name: item.title,
            images: [item.image],
            description: item.description,
            metadata: {
              id: item.id,
            },
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      };
    });
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      customer:customers.id,
      success_url: 'http://localhost:3000/checkout-success',
      cancel_url: 'http://localhost:3000/Cart',
    });
  
    res.send({url:session.url});
  };
module.exports ={
    stripePayment,
}