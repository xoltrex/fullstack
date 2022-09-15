const blogRouter = require("express").Router()
const Blog = require("../models/blog")


blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs.map((blog) => blog.toJSON()))
})

blogRouter.get("/:id", async (request, response) => {
  const blog = await Blog.findById(request.params.id)

  if (blog) {
    response.json(blog.toJSON())
  } else {
    response.status(404).end()
  }
})

blogRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body)

  const saved = await blog.save()
  response.status(201).json(saved.toJSON())
})

blogRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndDelete(request.params.id)
  response.status(204).end()
})


module.exports = blogRouter