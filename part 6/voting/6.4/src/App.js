import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createAnecdote, voteForAnecdote} from '../src/reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const addNew = (event) => {
    event.preventDefault()
    const newAnecdote = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(createAnecdote(newAnecdote))
  }

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteForAnecdote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
            <div> 
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div><input name="newAnecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App