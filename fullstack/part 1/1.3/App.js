import React from "react";

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {name: 'Fundamentals of React',exercises: 10 }
  const part2 = {name: 'Using props to pass data', exercises: 7 }
  const part3 = {name: 'State of a component', exercises: 14 }

  const total = part1.exercises + part2.exercises + part3.exercises


const Header = () => {
  return( <h1>{course}</h1> )
}

const Content = () => {
  return ( 
    <div>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
    </div>
  )
}

const Total = () => {
  return( <p>{total}</p> )
}
  
return (
  <div>
    <Header course={course}/>
    <Content/>
    <Total total={'Total number of exercises ' + total}/>
  </div>
)
}

export default App;