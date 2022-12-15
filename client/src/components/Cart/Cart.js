import { Link } from "react-router-dom";
import './Cart.css'
import image from '../../assets/images/S1cd1579e3c2b4cc09c24c28ec64581af5.png_.webp'

const Cart = () => {
  const test = false
  return (
    (test)? 
    <div className="text-center">
      <h1 className="text-4xl font-bold my-4">Shopping Cart</h1>
      <div className="text-center">
        <p className="">Your cart is currently empty</p>
      </div>
      <div className="btn_start-shopp my-2">
        <Link to={"/"} className="mx-0">
           start shopping
        </Link>
      </div>
    </div>
    :
    <div className="">
      <div className="image">
      <img src={image} alt="" />
      </div>
      <div className="btn_start-shopping">
        <Link to={"/"} className="bg-[#be0b20]">Start Shopping</Link>
      </div>
    </div>
  );
};

export default Cart;
