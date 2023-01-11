import {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

import loginService from './services/login'
import userService from './services/user'

import {createNotification} from './reducers/notificationReducer'
import {addBlog, deleteBlog, addLikeToBlog, initializeBlogs} from './reducers/blogReducer'

const App = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  const blogs = useSelector(({blogs}) => {
    return blogs
  })

  const x = (a, b) =>
    b.likes - a.likes || a.title.localeCompare(b.title)
  const sortedBlogs = [...blogs].sort(x)

  const notification = useSelector(({notification}) => {
    return notification
  })

  const blogFormRef = useRef()

  useEffect(() => {
    const userFromStorage = userService.getUser()
    if (userFromStorage) {
      setUser(userFromStorage)
    }
  }, [])

  const login = async (username, password) => {
    loginService
      .login({username, password})
      .then((user) => {
        setUser(user)
        userService.setUser(user)
        notify(`${user.name} logged in`)
      }).catch(() => {
        notify('wrong username/password', 'alert')
      })
  }

  const logout = () => {
    setUser(null)
    userService.clearUser()
  }

  const createBlog = async (blog) => {
    dispatch(addBlog(blog))
      .then(() => {
        notify(`blog '${blog.title}' by ${blog.author} added`)
        blogFormRef.current.toggleVisibility()
      })
      .catch((error) => {
        notify('error: ' + error.response.data.error, 'alert')
      })
  }

  const removeBlog = (id) => {
    const toRemove = blogs.find((b) => b.id === id)

    const ok = window.confirm(
      `remove '${toRemove.title}' by ${toRemove.author}?`
    )

    if (!ok) {
      return
    }

    dispatch(deleteBlog(id)).then(() => {
      notify('blog was removed')
    })
  }

  const likeBlog = async (id) => {
    const blog = blogs.find((b) => b.id === id)

    const likedBlog = {
      ...blog,
      likes: (blog.likes || 0) + 1,
      user: blog.user.id
    }

    dispatch(addLikeToBlog(likedBlog)).then(() => {
      notify(`liked '${likedBlog.title}' by ${likedBlog.author}`)
    })
  }

  const notify = (message, type) => {
    const time = 3
    dispatch(createNotification(message, time, type))
  }

  if (user === null) {
    return (
      <>
        <Notification notification={notification} />
        <LoginForm onLogin={login} />
      </>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification notification={notification} />
      <div>
        {user.name} logged in
        <button onClick={logout}>logout</button>
      </div>
      {
        <Togglable buttonLabel='create' ref={blogFormRef}>
          <BlogForm onCreate={createBlog} />
        </Togglable>
      }
      <div id='blogs'>
        {sortedBlogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            likeBlog={likeBlog}
            removeBlog={removeBlog}
            user={user}
          />
        ))}
      </div>
    </div>
  )
}

export default App
