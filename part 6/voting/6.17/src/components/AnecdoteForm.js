import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {showNotif, hideNotif} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(createAnecdote(content))

    dispatch(showNotif(`anecdote added: ${content}`))
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