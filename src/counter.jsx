import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "./countModule";

class Counter extends React.Component {
  render() {
    const { count, countUp, countDown } = this.props;
    return (
      <center>
        <h1>count</h1>
        <button onClick={countUp}>up</button>
        <button onClick={countDown}>down</button>
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
    countUp: bindActionCreators(actionCreators.countUp, dispatch),
    countDown: bindActionCreators(actionCreators.countDown, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
