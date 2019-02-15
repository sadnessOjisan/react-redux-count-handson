import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { countUp, countDown, reset } from "./countModule";

/**
 * This is MyClass.
 * @reactProps {!number} count - storeが管理しているcountのstate
 * @reactProps {void=>void} countUp - countUp actionのdispatcher
 * @reactProps {void=>void} countDown - countDown actionのdispatcher
 * @reactProps {void=>void} reset - reset actionのdispatcher
 */
class Counter extends React.Component {
  /**
   * propsが更新されるたびに呼び出されるレンダリング関数
   */
  render() {
    const { count, countUp, countDown, reset } = this.props;
    return (
      <center>
        <h1>count</h1>
        <button onClick={countUp}>up</button>
        <button onClick={countDown}>down</button>
        <button onClick={reset}>reset</button>
        <p>{count}</p>
      </center>
    );
  }
}

/**
 * counterのstateとcounterコンポーネントを紐づける役割を持つ
 * @param {Store} state Counterコンポーネントに伝えたいstateを宣言する
 */
const mapStateToProps = state => {
  return { count: state.count };
};

/**
 * counterのstoreにアクションをdispatchする役割を持つ
 */
const mapDispatchToProps = dispatch => {
  return {
    countUp: () => dispatch(countUp()),
    countDown: () => dispatch(countDown()),
    reset: () => dispatch(reset())
  };
};

/**
 * storeとcomponentを紐づける
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export { Counter, mapStateToProps, mapDispatchToProps };
