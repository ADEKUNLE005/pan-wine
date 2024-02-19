import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./cartSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
Store.dispatch(getTotals());

export default Store;
