// REDUCER
let initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
      case "INCREMENTBYTEN":
      return state + 10;
    case "DECREMENTBYTEN":
      return state - 10;
      case "RESET":
      return 0;
    default:
      return state;
  }
};


export default counterReducer;