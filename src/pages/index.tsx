
import { Inter } from "next/font/google";
import Form from "./components/Form";
import { Provider } from "react-redux";
import { store } from "./_app";


export default function Home() {
  return (
    <>
    <Provider store={store}>
    <Form/>   
    </Provider>  
    </>
  );
}
