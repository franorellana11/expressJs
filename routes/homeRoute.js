const express = require('express')

const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
  res.send("<h1>My Server in Express //  HOME  </h1>")
})


module.exports = homeRouter
