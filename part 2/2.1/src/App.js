import React from "react";
import Course from "./Course";

const App = () => {
  const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {name: 'Fundamentals of React', exercises: 10, id: 1},
        {name: 'Using props to pass data', exercises: 7, id: 2},
        {name: 'State of a component', exercises: 14, id: 3}
      ]
    }
/* const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
const Total = () => {
  return( <p>{total}</p> )
}*/
  
return (
  <div>
    <Course course={course} />
  </div>
)
}

export default App;