import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3001/api/v1/greetings';

const initialState = {
  loading: false,
  greetings: [],
  error: '',
};

export const getGreetings = createAsyncThunk('greeting/getGreetings', () => axios
  .get(url)
  .then((res) => res.data)
  .catch((err) => err));

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreetings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGreetings.fulfilled, (state, action) => {
      state.loading = false;
      state.greetings = action.payload;
      state.error = '';
    });
    builder.addCase(getGreetings.rejected, (state, action) => {
      state.loading = false;
      state.greetings = [];
      state.error = action.error.message;
    });
  },
});

export default greetingSlice.reducer;
