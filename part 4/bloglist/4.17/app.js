const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const cors = require('cors')
const app = express()
const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const mWare = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected')
  })
    .catch((err) => {
      logger.error(err)
      process.exit(1)
    })

app.use(cors());
app.use(express.json());
app.use(mWare.requestLogger);
app.use('/api/blogs', blogRouter);
app.use('/api/users', userRouter);
app.use(mWare.unknownEndpoint);
app.use(mWare.errorHandler);

module.exports = app;