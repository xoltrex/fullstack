import React from "react";

const Statistics = (props) => {
  
return (
  <div>
    <h1>Give feedback</h1>
    <button onClick={() => props.setGood(props.good + 1)}> good </button>
    <button onClick={() => props.setNeutral(props.neutral + 1)}> neutral </button>
    <button onClick={() => props.setBad(props.bad + 1)}> bad </button>
    <h2>Statistics</h2>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
    <p>Total: {props.total}</p>
    <p>Average: {props.average}</p>
    <p>PoP: {props.perc}%</p>
    <h6>percentage of positive*</h6>
  </div>
  )
}

export default Statistics