import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 0 },
    { id: 1, name: 'Grey Yordan', count: 0 },
  ],
  reducers: {
    upCount(state, action) {
      state[action.payload].count++;
    },
  },
});

export let { upCount } = cart.actions;

export default cart;
