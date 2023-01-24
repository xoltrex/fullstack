import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'

import User from './User'
import Userlist from './Userlist'
import Blogview from './Blogview'
import {logoutUser} from '../reducers/userReducer'
import {initializeUsers} from '../reducers/usersReducer'

const Blogs = ({ user, notify, notification }) => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutUser())
  }

  const showLoggedUser = () => (
    <div>
      {user.name} logged in
      <button onClick={logout}>logout</button>
    </div>
  )

  useEffect(() => {
    dispatch(initializeUsers())
  }, [dispatch])

  const users = useSelector(({ users }) => {
    return users
  })

  const padding = {padding: 5}
  return (
    <Router>
      <div>
        <Link style={padding} to='/'>
          Blogs
        </Link>
        <Link style={padding} to='/users'>
          Users
        </Link>
      </div>
      <div> {showLoggedUser()}</div>

      <Routes>
        <Route path='/' element={<Blogview notify={notify} notification={notification} user={user} />}/>
        <Route path="/users" element={<Userlist users={users} />} />
        <Route path="/users/:id" element={<User users={users} />} />
      </Routes>
    </Router>
  )
}

export default Blogs