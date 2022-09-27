import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [blogTitle, setBlogTitle] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')
  const [blogUrl, setBlogUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs => {
      setBlogs(blogs)
    })  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])


  const addBlog = (event) => {
    event.preventDefault()
    const x = {
      title: blogTitle,
      author: blogAuthor,
      url: blogUrl,
    }

    blogService.create(x).then((ret) => {
      setBlogs(blogs.concat(ret))
      setBlogTitle('')
      setBlogAuthor('')
      setBlogUrl('')
    })
  }

  const loginHandler = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({username, password})
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
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
  
  const titleHandler  = (event) => {
    setBlogTitle(event.target.value)
  } 
  const authorHandler = (event) => {
    setBlogAuthor(event.target.value)
  }
  const urlHandler = (event) => {
    setBlogUrl(event.target.value)
  }
  const logoutHandler = () => {
    window.localStorage.removeItem('loggedUser')
    document.location.reload()
  }

  return (
    <div>
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
          <BlogForm
            onSubmit={addBlog}
            blogTitle={blogTitle}
            titleHandler={titleHandler}
            blogAuthor={blogAuthor}
            authorHandler={authorHandler}
            blogUrl={blogUrl}
            urlHandler={urlHandler}
          />
          <p>{user.name} logged in <button onClick={logoutHandler} type='submit'>logout</button></p>
          <h3>Blogs</h3>
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog}/>
          )}
        </div>
      }
    </div>
  )
}

export default App
