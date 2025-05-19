import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/cartSlice.js";
import booksApi from "./Features/Book/bookApi.js";
import { setupListeners } from "@reduxjs/toolkit/query";
import ordersApi from "./Features/Order/orderApi.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Cart reducer
    [booksApi.reducerPath]: booksApi.reducer, // Books API reducer
    [ordersApi.reducerPath]: ordersApi.reducer, // Orders API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware), // Adding API middlewares
});

setupListeners(store.dispatch);
