import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  isLoading: false,
  isError: false,
  message: '',
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = '';
    },
  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
