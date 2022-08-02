const express = require('express')
const faker = require('faker')

const routerUsers = express.Router()


routerUsers.get('/', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('<h1>Endopint Users</h1><br><h3>There are not parameters</h3>')
  }
})


module.exports = routerUsers
