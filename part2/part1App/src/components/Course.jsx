export const Course = ({course}) => {
    return (
      <div>
        <Header text={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
}
  
const Header = ({text}) => {
    return (
      <h1>{text}</h1>
    )
}
  
const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </div>
    )
}
  
const Part = ({part}) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
}
  
const Total = ({parts}) => {
    const initialValue = 0
    const total = parts.reduce((initialValue, currentValue) => {
      console.log(initialValue, currentValue.exercises)
      return (initialValue + currentValue.exercises)
    }, 0)
    return (
      <h3>total of {total} exercises</h3>
    )
}
