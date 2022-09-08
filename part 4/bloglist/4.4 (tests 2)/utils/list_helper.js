const dummy = (blogs) => {return 1}
const likes = (blogs) => {
  return blogs.length === 0 ? 0 : 
    blogs.reduce((sum, post) => sum + post.likes, 0)
}

module.exports = {dummy, likes}