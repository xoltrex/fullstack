const Blog = require("../models/blog")

const confBlogs = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}
module.exports = {confBlogs}