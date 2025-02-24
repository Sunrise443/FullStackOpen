const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Greetings {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const friends = ['Ira', 'Mike']
  return (
    <>
      <p>Hello World!</p>
      <Hello name="Nika" age = {26+10}/>
      <p>{friends}</p>
    </>
  )
}

export default App
