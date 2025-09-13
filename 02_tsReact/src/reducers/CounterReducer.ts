export type CounterState = { count: number };

export type CounterAction = { type: "increment" | "decrement" };

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};