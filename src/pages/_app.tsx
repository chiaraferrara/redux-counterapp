import "@/styles/globals.css";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { AppProps } from "next/app";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload,
  },

});

  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
  });

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />;
}
