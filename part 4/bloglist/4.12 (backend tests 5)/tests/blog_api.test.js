const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require("./test_helper");

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/)
})

test("id instead of _id", async () => {
  const response = await api.get("/api/blogs")
  const ids = response.body.map((blog) => blog.id)
  for (const id of ids) {expect(id).toBeDefined()}
})

test("blogs can be added", async () => {
  const newBlog = {
    title: "yes",
    author: "a",
    url: "https://www.test.com",
    likes: 1,
  }

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/)

    const blogs = await helper.confBlogs()
    const titles = blogs.map((blog) => blog.title)
    expect(titles).toContain("yes")
})

test("likes = 0 if missing", async () => {
  const newBlog = {
    title: "ok",
    author: "ok",
    url: "https://www.test.com"
  }

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/)

  const blogs = await helper.confBlogs()
  expect(blogs[blogs.length - 1].likes).toBe(0)
})

test("backend declines requests with missing data", async () => {
  const newBlog = {likes: 1}
  await api.post("/api/blogs").send(newBlog).expect(400)
})

afterAll(() => {
  mongoose.connection.close()
})