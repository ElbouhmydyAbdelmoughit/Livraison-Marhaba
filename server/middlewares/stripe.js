
const stripe = require("stripe")(process.env.STRIPE_API_SECRET);
const stripePayment = async (req, res) => {
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
    shipping_address_collection: {allowed_countries: ['MA']},
    custom_text: {
    shipping_address: {
      message: 'Please note that we can\'t guarantee 2-day delivery for PO boxes at this time.',
    },
    submit: {message: 'We\'ll email you instructions on how to get started.'},
  },
    success_url: "http://localhost:3000/checkout-success",
    cancel_url: "http://localhost:3000/Cart",
  });

  res.send({ url: session.url });
};
// const getCustomer = ()=>{
//   const id= req.params.id
//   stripe.customers.retrieve(id,(err,customer)=>{
//     if(err){
//       console.log('err: '+err)
//     }if(customer){
//       console.log('success: '+JSON.stringify(customer))
//     }else{
//       console.log('something wrong')
//     }
//   })
// }
// console.log(getCustomer())

module.exports = {
  stripePayment,
};

