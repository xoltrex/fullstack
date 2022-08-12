import React from 'react'

const Total = (course) => {
  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

  return (<p>Total number of exercises {total}</p>)
  }

export default Total

