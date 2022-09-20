const info = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    console.log(...params);
  }
}

const error = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    console.error(...params);
  }
}
//most useless thing to ever exist jesus christ
module.exports = { info, error }