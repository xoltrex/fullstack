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
      {anecdotes.sort((min, max) => max.votes - min.votes)
        .map((anecdote) => (
          <div key={anecdote.id} className='anecdote'>
            <div>{anecdote.content}</div>
            <div>
              <div>
                Has <strong>{anecdote.votes}</strong>{' '}
                {anecdote.votes === 1 ? 'vote' : 'votes'}
              </div>
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))
      }
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div><input name='newAnecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App