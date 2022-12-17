import { configureStore } from "@reduxjs/toolkit";
import Cart from "../features/Cart"
import cartSlice from "../features/cartSlice";

const store = configureStore({
  products: cartSlice,
});

export default store;
