const listHelper = require("../utils/list_helper");
describe("most blogs", () => {
  const blogs = [
    {
      title: "test",
      author: "me",
      url: "http://www.test.com",
      likes: 5,
    },
    {
      title: "test",
      author: "bob",
      url: "http://www.test.com",
      likes: 7,
    },
    {
      title: "test",
      author: "bob",
      url: "http://www.test.com",
      likes: 9,
    }
  ]

  test("many blogs, = bob", () => {
    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual({
      author: "bob",
      blogs: 2
    })
  })
})