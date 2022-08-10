import { useState } from 'react'

const App = () => {
  const anecdotes = {
    lines: [
      {text: 'If it hurts, do it more often.', id: 0},
      {text: 'Adding manpower to a late software project makes it later!', id: 1},
      {text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', id: 2},
      {text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', id: 3},
      {text: 'Premature optimization is the root of all evil.', id: 4},
      {text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', id: 5},
      {text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', id: 6}
    ]
  }

  const [random, setRandom] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))

  const Random = () => { return anecdotes.lines[Math.floor(Math.random() * anecdotes.lines.length)]}
  const getRandom = () => {setRandom(Random)}

  const getVotes = () => {
    const updVotes = [...votes]
    updVotes[random.id] += 1
    setVotes(updVotes)
  }

  return (
    <div>
      <p>{random.text}</p>
      <p>has {votes[random.id]} votes</p>
      <button onClick={() => getRandom()}> Next </button>
      <button onClick={() => getVotes()}> Vote </button>
    </div>
  )
}

export default App