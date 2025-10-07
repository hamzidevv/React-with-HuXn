import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../app/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: any) => state.counter.count); // Read the data from the "store"
  const dispatch = useDispatch(); // Change the data by sending actions to the "store"

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
export default Counter;
