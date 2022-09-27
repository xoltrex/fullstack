import React from "react";
import Togglable from "./Togglable";

const Blog = ({blog}) => (
  <div>
    <div>
      {blog.title} by {blog.author}
    </div>
    <Togglable buttonLabel="View">
      Url: {blog.url}<br/>
      User: {blog.user.username}<br/>
    </Togglable>
  </div>  
)

export default Blog