import { useState } from "react";
import Statistics from './Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good+neutral+bad
  const average = total / 3
  const perc = (good/total)*100

  return (
    <div>
      <Statistics 
        good={good} setGood={setGood}
        neutral={neutral} setNeutral={setNeutral}
        bad={bad} setBad={setBad}
        total={total}
        average={average}
        perc={perc}
      />
    </div>
  )
}

export default App