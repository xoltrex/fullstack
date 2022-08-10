import React from "react";

export const Statistics = (props) => {
  if (props.clicks.length === 0) {
    return (<div><p>No feedback given</p></div>)
  }return (
    <div>
      <h2>Statistics</h2>
      <table cellSpacing={'0'}>
        <tbody>
          <tr>
            <td>Good: </td> 
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>Neutral: </td> 
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>Bad: </td> 
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>Total: </td> 
            <td>{props.total}</td>
          </tr>
          <tr>
            <td>Average: </td> 
            <td>{props.average}</td>
          </tr>
          <tr>
            <td>PoP: </td> 
            <td>{props.perc}%</td>
          </tr>
        </tbody>
      </table>
      <h6>percentage of positive*</h6>
    </div>
  )
}

export default Statistics