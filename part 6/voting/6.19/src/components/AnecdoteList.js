import React from 'react'
import {connect} from 'react-redux'
import {voteForAnecdote} from '../reducers/anecdoteReducer'
import {showNotif} from '../reducers/notificationReducer'
import Filter from './Filter'

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    props.voteForAnecdote(anecdote)
    props.showNotif(`voted for: ${anecdote.content}`, 1)
  }

  const Anecdote = ({anecdote}) => {
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
      {props.anecdotes.sort((min, max) => max.votes - min.votes)
        .map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  if (state.filter) {
    return {
      anecdotes: state.anecdotes.filter((anecdote) =>
        anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
      )
    }
  }
  return {anecdotes: state.anecdotes}
}

const mapDispatchToProps = {voteForAnecdote, showNotif}

const ConnectedAnecdotes = connect(
  mapStateToProps, mapDispatchToProps
) (AnecdoteList)

export default ConnectedAnecdotes