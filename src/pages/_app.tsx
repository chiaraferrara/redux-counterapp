import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { AppProps } from "next/app";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload,
  },
});

export const numberSlice = createSlice({
  name: "number",
  initialState: 0,
  reducers: {
    set: (state, action) => (state = action.payload),
    reset: (state) => (state = 0),
  },
});

export const errorSlice = createSlice({
  name: "error",
  initialState: false,
  reducers: {
    setError: (state, action) => (state = action.payload),
    
  },
});

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    number: numberSlice.reducer,
    error: errorSlice.reducer,
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
