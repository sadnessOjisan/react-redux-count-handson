import { createStore } from "redux";
import reducer from "./countModule";

const store = createStore(reducer);

export default store;
