import { useReducer, useState } from "react"
import { initialState, counterReducer } from "../counterReducer"

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0);

    const handleChange = (e) => {
        let value = +e.target.value
        if (value < 0) {
            setInputValue(0)
            return
        }
        setInputValue(e.target.value)
    }

    const handleIncrementByAmount = () => {
        dispatch({type: "incrementByAmount", payload: +inputValue});
        setInputValue(0);
    }

    const handleDecrementByAmount = () => {
        dispatch({type: "decrementByAmount", payload: +inputValue});
        setInputValue(0);
    }
  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>

        <div>
            <input type="number" value={inputValue} onChange={handleChange} onInput={handleChange} />
            <button onClick={handleIncrementByAmount}>Add</button>
            <button onClick={handleDecrementByAmount}>Subtract</button>
        </div>
    </div>
  )
}

export default Counter