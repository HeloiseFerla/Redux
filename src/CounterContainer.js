import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({

  count: state

});


const CounterContainer=({count,dispatch})=>(
  <>
    <p id="counter-render">{count}</p>
    <button  onClick={() => dispatch({ type: 'INCREMENT' })} id="button-increment">Increment</button>
    <button onClick={() => dispatch({ type: 'DECREMENT' })} id="button-decrement">Decrement</button>
    <button onClick={() => dispatch({ type: 'INCREMENTBYTEN' })} id="button-incrementByTen">Add 10</button>
    <button onClick={() => dispatch({ type: 'DECREMENTBYTEN' })} id="button-decrementByTen">Remove 10</button>
    <button onClick={() => dispatch({ type: 'RESET' })} id="button-reset">Reset</button>
  </>

)

export default connect(

  mapStateToProps

)(CounterContainer);