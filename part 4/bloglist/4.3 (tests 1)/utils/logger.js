const info = (...params) => {
  console.log(...params)
}

const error = (...params) => {
  console.error(...params)
}
//most useless thing to ever exist jesus christ
module.exports = { info, error }