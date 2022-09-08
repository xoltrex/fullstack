const dummy = (blogs) => {return 1}
const likes = (blogs) => {
  return blogs.length === 0 ? 0 : 
    blogs.reduce((sum, post) => sum + post.likes, 0)
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

module.exports = {dummy, likes, favorite}