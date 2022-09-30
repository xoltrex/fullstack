import React , {useState} from 'react'
import Togglable from "./Togglable"

const Blog = (props) => {
  const blog = props.blog
  const [blogObject, setBlogObject] = useState(blog)

  const likeHandler = () => {
    const updatedBlog = ({...blog, likes: blog.likes + 1})
    console.log(`blog.js || ${blog.id} || ${updatedBlog.likes}`)
    props.updateBlog(updatedBlog)
    setBlogObject(updatedBlog)
  }

  return (
    <div>
      <div>
        {blog.title} by {blog.author}
      </div>
      <Togglable buttonLabel="View">
        Url: {blog.url}<br/>
          <p>
            {blogObject.likes === 1 ? `${blog.likes} like` : `${blog.likes} likes`}
            <button onClick={likeHandler}>Like</button>
          </p>
      </Togglable>
    </div> 
  ) 
}

export default Blog