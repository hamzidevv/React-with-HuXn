const initialState = {
    count: 0
}

const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            if (state.count === 0) return {count: 0}
            return {count: state.count - 1}
        case "incrementByAmount":
            return {count: state.count + action.payload}
        case "decrementByAmount":
            return {count: state.count - action.payload}
        default:
            return state
    }
}

export {initialState, counterReducer}