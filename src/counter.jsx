import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { countUp, countDown, reset } from "./countModule";

/**
 * CounterのUIを作るクラスコンポーネント。
 * Reactのクラスコンポーネントは必ず`render()`メソッドを持たなければならない。
 * @reactProps {Number} count - storeが管理しているcountのstate
 * @reactProps {void=>void} countUp - countUp actionのdispatcher
 * @reactProps {void=>void} countDown - countDown actionのdispatcher
 * @reactProps {void=>void} reset - reset actionのdispatcher
 */
class Counter extends React.Component {
  /**
   * stateやpropsを元にUIを返す関数.
   * コンポーネントがmountされたとき、propsやstateが更新されたときに自動で呼ばれる。
   * renderのライフサイクルについては [こちら(Understanding React — React 16.3 + Component life-cycle)](https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705)を参照すると良いでしょう。
   * またrenderの仕様は [こちら(React.Component#render)](https://reactjs.org/docs/react-component.html#render)を参照すると良いでしょう。
   * @returns {void}
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
