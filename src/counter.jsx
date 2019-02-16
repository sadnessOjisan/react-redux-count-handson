import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { countUp, countDown, reset } from "./countModule";

class Counter extends React.Component {
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

const mapStateToProps = state => {
  return { count: state.count };
};

const mapDispatchToProps = dispatch => {
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
