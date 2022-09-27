import React from 'react'

const BlogForm = ({onSubmit, blogTitle, titleHandler, blogAuthor, authorHandler, blogUrl, urlHandler}) =>
  <form onSubmit={onSubmit}>
    <div><input value={blogTitle} onChange={titleHandler} placeholder='Title'/></div>
    <div><input value={blogAuthor} onChange={authorHandler} placeholder='Author'/></div>
    <div><input value={blogUrl} onChange={urlHandler} placeholder='Url'/></div>
    <div><button type='submit'>add</button></div>
  </form>

export default BlogForm