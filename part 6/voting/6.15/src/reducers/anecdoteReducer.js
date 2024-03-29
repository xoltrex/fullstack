import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'NEW':
      return [...state, action.data]

    case 'INIT':
      return action.data

    case 'VOTE': {
      const id = action.data.id
      const anecdoteToChange = state.find((a) => a.id === id)
      const changedAnecdote = {...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    }
    default: 
      return state
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW',
      data: newAnecdote
    })
  }
}

export const voteForAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: {id}
  }
}

export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}
export default reducer