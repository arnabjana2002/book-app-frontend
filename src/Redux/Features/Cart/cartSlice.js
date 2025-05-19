import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          icon: "success",
          title: "Item added to cart",
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Item already in cart",
          text: "You can increase the quantity in the cart.",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Go to Cart",
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      Swal.fire({
        icon: "success",
        title: "Cart cleared",
        showConfirmButton: true,
        timer: 1500,
      });
    },
  },
});

// Action creators are generated for each case reducer function
// Exporting the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// Exporting the reducer
export default cartSlice.reducer;
