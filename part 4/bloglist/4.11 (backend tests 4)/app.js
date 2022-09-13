const config = require("./utils/config")
const express = require('express')
const cors = require('cors')
const app = express()
const router = require("./controllers/blogs")
const mWare = require("./utils/middleware")
const logger = require("./utils/logger")
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
app.use("/api/blogs", router);
app.use(mWare.unknownEndpoint);
app.use(mWare.errorHandler);

module.exports = app;