// @flow

import * as React from "react";
import { bindActionCreators, type Dispatch } from "redux";
import { connect } from "react-redux";
import { countUp, countDown, reset } from "./countModule";
import { type TStore } from "./redux";

type TMapStateToProps = {|
  count: number
|};

type TMapDispatchToProps = {|
  countUp: typeof countUp,
  countDown: typeof countDown,
  reset: typeof reset
|};

type Props = {
  ...TMapStateToProps,
  ...TMapDispatchToProps
};

class Counter extends React.Component<Props> {
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

const mapStateToProps = (state: TStore) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    countUp: () => dispatch(countUp()),
    countDown: () => dispatch(countDown()),
    reset: () => dispatch(reset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
