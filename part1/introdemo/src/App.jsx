import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering...', counter)

  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log('rendered before', counter)
  }
  const decreaseByOne = () => {
    setCounter(counter - 1)
    console.log('renderd before', counter)
  }
  const setToZero = () => {
    setCounter(0)
    console.log('rendered before', counter)
  }

  return (
    <>
      <Display counter={counter}/>
      <Button text='plus' onClick={increaseByOne}/>
      <Button text='zero' onClick={setToZero}/>
      <Button text='minus' onClick={decreaseByOne}/>
    </>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ text, onClick }) => (
    <button onClick={onClick}>
      {text}
    </button>
)

export default App
