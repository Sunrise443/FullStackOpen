import { useState } from "react";

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return(
      <div>
        <StatisticsLine text={"good"} value={props.good}/>
        <StatisticsLine text={"neutral"} value={props.neutral}/>
        <StatisticsLine text={"bad"} value={props.bad}/>

        <StatisticsLine text={"all"} value={props.all}/>
        <StatisticsLine text={"average"} value={(props.good-props.bad)/props.all}/>
        <StatisticsLine text={"positive"} value={(props.good*100)/props.all}/>
      </div>
    )
  }
}

const Button = ({ text, func }) => {
  return(<button onClick={func}>{text}</button>)
}

const StatisticsLine = ({ text, value }) => {
  return(<p>{text} {value}</p>)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const setFeedback = (feedback) => {
    if (feedback===1) {
      setGood(good+1)
    } else if (feedback===0) {
      setNeutral(neutral+1)
    } else if (feedback===-1) {
      setBad(bad+1)
    }
    setAll(all+1)
  }

  return(
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text={"good"} func={() => setFeedback(1)}/>
        <Button text={"neutral"} func={() => setFeedback(0)}/>
        <Button text={"bad"} func={() => setFeedback(-1)}/>
      </div>

      <h1>statistics</h1>
      <Statistics all={all} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
