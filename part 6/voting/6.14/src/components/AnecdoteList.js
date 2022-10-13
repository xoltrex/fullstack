import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {voteForAnecdote} from '../reducers/anecdoteReducer'
import {showNotif, hideNotif} from '../reducers/notificationReducer'
import Filter from './Filter'

const AnecdoteList = () => {
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) =>
    filter ? state.anecdotes.filter((anecdote) => 
    anecdote.content.toLowerCase()
      .includes(filter.toLowerCase())) : state.anecdotes
  )

  const vote = (id) => {
    dispatch(voteForAnecdote(id))
    const voted = anecdotes.filter((x) => x.id === id)
    dispatch(showNotif(`voted for: ${voted[0].content}`))
    setTimeout(() => dispatch(hideNotif()), 3500)
  }

  const Anecdote = ({ anecdote }) => {
    return (
      <div className='anecdote'>
        <div>{anecdote.content}</div>
        <div>
          Has <strong>{anecdote.votes}</strong>{' '}
          {anecdote.votes === 1 ? 'vote' : 'votes'}{' '}
          <button onClick={() => vote(anecdote.id)}>Vote</button>
        </div>
      </div>
    )
  }


  return (
    <div>
    <Filter/>
      {anecdotes.sort((min, max) => max.votes - min.votes)
        .map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote} />
        ))
      }
    </div>
  )
}

export default AnecdoteList