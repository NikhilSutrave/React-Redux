import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};
export const customReducer = createReducer(initialState, {
  increment: (state, action) => {
    state.value += 1;
  },

  incrementByValue: (state, action) => {
    // state.value += 1;
    state.value += action.payload;
  },
  decrement: (state, action) => {
    state.value -= 1;
  },
});
