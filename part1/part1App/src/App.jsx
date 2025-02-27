const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
  )
}

const Header = ({course}) => {
  console.log(course)
  return (
    <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
  console.log(parts)
  return (
    <>
      <Part parts={parts[0].name} exercises={parts[0].exercises}/>
      <Part parts={parts[1].name} exercises={parts[1].exercises}/>
      <Part parts={parts[2].name} exercises={parts[2].exercises}/>
    </>
  
  )
}

const Part = ({parts, exercises}) => {
  console.log(parts, exercises)
  return (
    <>
      <p>{parts} {exercises}</p>
    </>
  )
}

const Total = ({parts}) => {
  console.log(parts)
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

export default App
