import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    increaseQuantity: (state, action) => {
      let item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = item.quantity + 1;
        item.price = item.price * item.quantity + 1;
      }
    },
    decreaseQuantity: (state, action) => {
      let item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1;
          item.price = item.price / item.quantity - 1;
        } else if (item.quantity === 1) {
          state.items = state.items.filter((x) => x.id !== action.payload.id);
        }
      }
    },
  },
});

export const {
  addToBasket,

  increaseQuantity,
  decreaseQuantity,
} = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;
