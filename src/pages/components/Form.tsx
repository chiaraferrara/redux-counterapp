import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice, errorSlice, numberSlice } from "../_app";
import { Btn, Div } from "@/styles/globals";

export default function Form() {
  const counter: any = useSelector<any>((state: any) => state.counter);
  const number: any = useSelector<any>((state: any) => state.number);
  const error: any = useSelector<any>((state: any) => state.error);
  const dispatch = useDispatch();

  const onClickIncrease = (num: any) => {
    dispatch(counterSlice.actions.increment(num));
    dispatch(numberSlice.actions.reset());
  };

  const onClickDecrease = (num: any) => {
    if (num > counter) {
      dispatch(errorSlice.actions.setError(true));
      dispatch(numberSlice.actions.reset());
    } else {
      dispatch(counterSlice.actions.decrement(num));
      dispatch(numberSlice.actions.reset());
    }
  };

  return (
    <>
    <Div>
      <h1>Counter form</h1>
      <div>
        <input
          type="number"
          onInput={(e) => {
            const input = (e.target as HTMLInputElement).value;
            const inputWithoutSymbols = input.replace(/[^0-9]/g, "");
            if (inputWithoutSymbols) {
              dispatch(numberSlice.actions.set(parseInt(inputWithoutSymbols)));
            } else {
              dispatch(dispatch(numberSlice.actions.reset()));
            }
          }}
          value={number}
          placeholder="Type a number"
        /><br/>
        <Btn
          onClick={() => {
            onClickIncrease(number);
          }}
        >
          increase
        </Btn>

        <Btn
          onClick={() => {
            onClickDecrease(number);
          }}
        >
          decrease
        </Btn>

        {error === true ? (
          <>
            <h1>Counter is negative </h1>
            <Btn
              onClick={() => {
                dispatch(errorSlice.actions.setError(false));
              }}
            >
              Ok i understand
            </Btn>
          </>
        ) : (
          <h2>{counter}</h2>
        )}
      </div>
      </Div>
    </>
  );
}
