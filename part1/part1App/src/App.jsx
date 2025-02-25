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
      <Header courseName={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part parts={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part parts={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part parts={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </>
  
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.parts} {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

export default App
