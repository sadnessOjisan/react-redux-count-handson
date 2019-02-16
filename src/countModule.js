const COUNT_UP = "COUNT_UP";

const COUNT_DOWN = "COUNT_DOWN";

const RESET = "RESET";

export const countUp = () => {
  return { type: COUNT_UP };
};

export const countDown = () => {
  return { type: COUNT_DOWN };
};

export const reset = () => {
  return { type: RESET };
};

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_UP:
      return { ...state, count: state.count + 1 };
    case COUNT_DOWN:
      return { ...state, count: state.count - 1 };
    case RESET:
      return initialState;
    default:
      return initialState;
  }
};

export default reducer;
