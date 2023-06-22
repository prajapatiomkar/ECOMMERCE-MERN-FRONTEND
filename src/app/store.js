import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import productsReducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    product: productsReducer,
  },
});
