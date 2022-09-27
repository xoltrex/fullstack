import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs => {
      setBlogs(blogs)
    })  
  }, [])


  const addBlog = (event) => {
    event.preventDefault()
    const x = {
      title: newBlog,
      author: user.name,
      url: 'https://www.com',
    }

    blogService.create(x).then((ret) => {
      setBlogs(blogs.concat(ret))
      setNewBlog('')
    })
  }

  const changeHandler = (event) => {
    console.log(event.target.value)
    setNewBlog(event.target.value)
  }

  const loginHandler = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({username, password})

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setMessage(`error: wrong credentials`)
      setTimeout(() => {
        setMessage(null)
      }, 3500)
    }
  }

  const blogForm = () => (
    <form onSubmit={addBlog}>
      <input value={newBlog} onChange={changeHandler} />
      <button type="submit">save</button>
    </form>
  )

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={message}/>
      {user === null ?
        <LoginForm
          loginHandler={loginHandler}
          username={username}
          setUsername={setUsername}
          setPassword={setPassword}
          password={password}
        /> :
        <div>
          <h2>Add new blog</h2>
          {blogForm()}
          <p>{user.name} logged in</p>
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog}/>
          )}
        </div>
      }
    </div>
  )
}

export default App
