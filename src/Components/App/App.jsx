import React from 'react'
import Header from '../Header/Header'
 import Content from '../Content/Content'
import Total from '../Total/Total'

const App = () => {
 const course = 'Half Stack application development';
 const parts = [
    {
      id: 1,
      name: 'Fundamentals of React',
      exercise: 10
    },
    {
      id: 2,
      name: 'Using props to pass data',
      exercise: 7
    },
    {
      id: 3,
      name: 'State of a component',
      exercise: 14
    }

  ]


  const thePart = parts.map(part => {
    return (
      <Content
        key={part.id}
        {...part}
      />
    )

  })

 const total = parts.reduce((sum, part) => sum + part.exercise, 0);
  return (
      <div>
        <Header course={course} />
        {thePart}
      <Total total={total} /> 
      </div>
  )
}

export default App
