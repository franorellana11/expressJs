const express = require('express')
const app = express()
const port = 3000
const routerApi = require('./routes/index')
// const faker = require('faker')
// const Faker = require('faker/lib')

routerApi(app)


app.listen(port, () => {
  console.log(('Mi Port' +" "+ port));
})
