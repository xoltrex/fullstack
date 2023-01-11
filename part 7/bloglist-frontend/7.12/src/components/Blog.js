import {useState} from 'react'

const BlogDetails = ({blog, visible, likeBlog, removeBlog}) => {
  if (!visible) return null
    return (
      <div>
        <div>
          <a href={blog.url}>{blog.url}</a>
        </div>
          <div>
            {blog.likes} likes{' '}
              <button onClick={() => likeBlog(blog.id)}>like</button>
          </div>
          {<button onClick={() => removeBlog(blog.id)}>remove</button>}
      </div>
    )
}

const Blog = ({blog, likeBlog, removeBlog}) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="blog">
      {blog.title} {blog.author}
        <button onClick={() => setVisible(!visible)}>
          {visible ? 'hide' : 'view'}
        </button>
      <BlogDetails
        blog={blog}
        visible={visible}
        likeBlog={likeBlog}
        removeBlog={removeBlog}
      />
    </div>
  )
}

export default Blog
