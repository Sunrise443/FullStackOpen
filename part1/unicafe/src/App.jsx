import { useState } from "react";

const Feedback = (props) => {
  if (props.all == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return(
      <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>

      <p>all {props.all}</p>
      <p>average {(props.good-props.bad)/props.all}</p>
      <p>positive {(props.good*100)/props.all}</p>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)

  const setFeedback = (feedback) => {
    if (feedback==1) {
      setGood(good+1)
    } else if (feedback==0) {
      setNeutral(neutral+1)
    } else if (feedback==-1) {
      setBad(bad+1)
    }
    setAll(all+1)
  }

  return(
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => setFeedback(1)}>good</button>
        <button onClick={() => setFeedback(0)}>neutral</button>
        <button onClick={() => setFeedback(-1)}>bad</button>
      </div>

      <h1>statistics</h1>
      <Feedback all={all} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
