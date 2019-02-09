// action type
const COUNT_UP = "COUNT_UP";
const COUNT_DOWN = "COUNT_DOWN";

const actionTypes = {
  COUNT_UP,
  COUNT_DOWN
};

// action cretor
const countUp = () => {
  return { type: COUNT_UP };
};

const countDown = () => {
  return { type: COUNT_DOWN };
};

export const actionCreators = {
  countUp,
  countDown
};

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  console.log("reducer state", state);
  console.log("reducer action", action);
  switch (action.type) {
    case COUNT_UP:
      return { ...state, count: state.count + 1 };
    case COUNT_DOWN:
      return { ...state, count: state.count - 1 };
    default:
      return initialState; // これがないとundefinedが変えるよ https://qiita.com/kiita312/items/7fdce94912d6d9c801f8
  }
};

export default reducer;
