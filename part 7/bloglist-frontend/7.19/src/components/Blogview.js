import Bloglist from './Bloglist'
import NewBlog from './NewBlog'

const Blogview = ({blogs, notify}) => {
  return (
    <div>
      <h2>Blogs</h2>
      <NewBlog notify={notify} />
      <Bloglist blogs={blogs} />
    </div>
  )
}

export default Blogview