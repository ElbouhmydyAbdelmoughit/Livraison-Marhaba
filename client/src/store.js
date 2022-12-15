import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";

const store = configureStore({
  reducer: cartSlice,
});

export default store;
