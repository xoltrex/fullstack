
const listHelper = require("../utils/list_helper");

describe("likes", () => {

  const noBlogs = []
  const oneBlog = [
    {
      title: "test",
      author: "me",
      url: "http://www.test.com",
      likes: 3
    }
  ]
  const manyBlogs = [
    {
      title: "test",
      author: "me",
      url: "http://www.test.com",
      likes: 5,
    },
    {
      title: "test",
      author: "me",
      url: "http://www.test.com",
      likes: 7,
    },
    {
      title: "test",
      author: "me",
      url: "http://www.test.com",
      likes: 9,
    }
  ]


test("no blogs, = 0", () => {
  const result = listHelper.likes(noBlogs)
  expect(result).toBe(0);
})
test("one blog, = amount of likes", () => {
  const result = listHelper.likes(oneBlog)
  expect(result).toBe(3)
})
test("many blogs, = total of all likes", () => {
  const result = listHelper.likes(manyBlogs)
  expect(result).toBe(21)
})
})