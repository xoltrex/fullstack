import blogService from '../services/blogs'
import loginService from '../services/login'
import { setNotification } from '../reducers/notificationReducer'

const userReducer = (state = null, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INIT_USER':
      return action.user
    case 'LOGIN':
      return action.user
    case 'LOGOUT':
      return action.user
    default:
      return state
  }
}

export const initializeUser = () => {
  const loggedUserJSON = window.localStorage.getItem('loggedUser')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    blogService.setToken(user.token)
    return {
      type: 'INIT_USER',
      user: user
    }
  }

  return {
    type: 'INIT_USER',
    user: null
  }
}

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login({
        username,
        password
      })

      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      blogService.setToken(user.token)
      dispatch({
        type: 'LOGIN',
        user: user
      })
    } catch (exception) {
      dispatch(setNotification('wrong credentials', 'error', 5))
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('loggedUser')
    dispatch({
      type: 'LOGOUT',
      user: null
    })
  }
}

export default userReducer
