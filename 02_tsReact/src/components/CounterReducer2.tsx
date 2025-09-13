import { useReducer } from "react";
import { counterReducer, type CounterState } from "../reducers/CounterReducer";

const initialState: CounterState = {
    count: 0
}

const CounterReducer2 = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => dispatch({ type: "increment" })
  const decrement = () => dispatch({ type: "decrement" })

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export default CounterReducer2;
