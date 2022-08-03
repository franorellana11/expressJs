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


///////////////////////////////////// POST METHOD ///////////////////

routerUsers.post('/', (req, res)=> {
  const body = req.body
  res.json({
    message: 'created Users',
    data: body
  })
})


///////////////////////////////// PATCH METHOD /////////////////////////

routerUsers.patch('/:id', (req, res)=> {
  const { id } = req.params
  const body = req.body
  res.json({
    message: 'update Users',
    data: body,
    id
  })
})


////////////////////////////// DELETE METHOD ////////////////////



routerUsers.delete('/:id', (req, res)=> {
  const { id } = req.params
  res.json({
    message: 'deleted',
    id
  })
})



module.exports = routerUsers
