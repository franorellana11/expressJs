const express = require('express')
const productsRoute = require('./productsRoute')
const usersRoute = require('./usersRoute')
const categoriesRoute = require('./categories')
const homeRouterrr = require('./homeRoute')


function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRoute)
  router.use('/users', usersRoute)
  router.use('/categories', categoriesRoute)
  router.use('/home', homeRouterrr)
}



module.exports = routerApi
