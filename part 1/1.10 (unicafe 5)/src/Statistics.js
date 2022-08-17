import React from "react";

export const Statistics = (props) => {
  if (props.clicks.length === 0) {
    return (<div><p>No feedback given</p></div>)
  }return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {props.total}</p>
      <p>Average: {props.average}</p>
      <p>PoP: {props.perc}</p>
      <h6>percentage of positive*</h6>
    </div>
  )
}

export default Statistics