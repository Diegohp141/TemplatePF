import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.allProducts.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
