const _ = require('lodash')

const dummy = (blogs) => {return 1}
const likes = (blogs) => {
  return blogs.length === 0 ? 0 : 
    blogs.reduce((x, y) => x + y.likes, 0)
}
const favorite = (blogs) => {
  const favorite = blogs.reduce((x, y) => 
    {return x.likes > y.likes ? x : y}
  ) 
    return {
      title: favorite.title,
      author: favorite.author,
      likes: favorite.likes,
    }
}
const mostBlogs = (blogs) => {
  const blog = _(blogs).countBy('author').entries().maxBy(_.last)
  const result = {
    author: blog[0],
    blogs: blog[1]
  }
  return result
}

module.exports = {dummy, likes, favorite, mostBlogs}