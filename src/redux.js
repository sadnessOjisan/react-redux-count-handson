import { createStore } from "redux";
import reducer from "./countModule";

/**
 * reduxのstoreです。`createStore()`にreducerを渡すことで生成できます。
 * ここで作られたstoreが`provider`へと渡されます。
 * @type {Store}
 */
const store = createStore(reducer);

export default store;
