import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      if (!state.items.some((exitingItem) => exitingItem.id === item.id)) {
        state.items.push(item)
      }
    },

    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;