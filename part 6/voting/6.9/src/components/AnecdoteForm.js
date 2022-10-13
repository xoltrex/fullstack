import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const newAnecdote = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(createAnecdote(newAnecdote))
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name='newAnecdote' />
      <button type='submit'>add</button>
    </form>
  )
}

export default AnecdoteForm