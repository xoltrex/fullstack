import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {showNotif, hideNotif} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const newAnecdote = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(createAnecdote(newAnecdote))

    dispatch(showNotif(`anecdote added: ${newAnecdote}`))
    setTimeout(() => dispatch(hideNotif()), 3500)
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name='newAnecdote' />
      <button type='submit'>add</button>
    </form>
  )
}

export default AnecdoteForm