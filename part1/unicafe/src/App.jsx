import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)

  return(
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => {setGood(good+1), setAll(all+1)}}>good</button>
        <button onClick={() => {setNeutral(neutral+1), setAll(all+1)}}>neutral</button>
        <button onClick={() => {setBad(bad+1), setAll(all+1)}}>bad</button>
      </div>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

      <p>all {all}</p>
      <p>average {(good-bad)/all}</p>
      <p>positive {(good*100)/all}</p>
    </div>
  )
}

export default App
