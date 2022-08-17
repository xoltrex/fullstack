import { useState } from "react";
import Statistics from './Statistics';
import Buttons from "./Buttons";

const App = () => {
  const [good, setGood,] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState([])
  const total = good+neutral+bad
  const average = Math.round(total / 3)
  const perc = Math.round((good/total)*100)

  const handleGoodClick = () => {
    setClicks(clicks.concat(good))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setClicks(clicks.concat(neutral))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setClicks(clicks.concat(bad))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Buttons handleClick={handleGoodClick} text='Good'/>
      <Buttons handleClick={handleNeutralClick} text='Neutral'/>
      <Buttons handleClick={handleBadClick} text='Bad'/>
      <Statistics
        good={good} setGood={setGood}
        neutral={neutral} setNeutral={setNeutral}
        bad={bad} setBad={setBad}
        total={total}
        average={average}
        perc={perc}
        clicks={clicks}
      />
    </div>
  )
}

export default App