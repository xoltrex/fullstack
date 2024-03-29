import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {voteForAnecdote} from '../src/reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

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
                {anecdote.votes === 1 ? 'vote' : 'votes'}{' '}
              </div>
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))
      }
      <h2>create new</h2>
      <AnecdoteForm/>
    </div>
  )
}

export default App