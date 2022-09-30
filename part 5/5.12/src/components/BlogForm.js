import React, {useState}  from 'react'

const BlogForm = ({createBlog}) => {
  const [blogTitle, setBlogTitle] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')
  const [blogUrl, setBlogUrl] = useState('')

  const titleHandler  = (event) => {
    setBlogTitle(event.target.value)
  } 
  const authorHandler = (event) => {
    setBlogAuthor(event.target.value)
  }
  const urlHandler = (event) => {
    setBlogUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
        title: blogTitle,
        author: blogAuthor,
        url: blogUrl
      })
    setBlogTitle('')
    setBlogAuthor('')
    setBlogUrl('')
  }
  return (
    <form onSubmit={addBlog}>
      <div><input value={blogTitle} onChange={titleHandler} placeholder='Title'/></div>
      <div><input value={blogAuthor} onChange={authorHandler} placeholder='Author'/></div>
      <div><input value={blogUrl} onChange={urlHandler} placeholder='Url'/></div>
      <div><button type='submit'>add</button></div>
    </form>
  )
}

export default BlogForm