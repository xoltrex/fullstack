const Blog = require("../models/blog")
const User = require("../models/user")

const confBlogs = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}
const confUsers = async () => {
  const users = await User.find({})
  return users.map((user) => user.toJSON())
}

module.exports = {confBlogs, confUsers}