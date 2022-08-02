const productsRoute = require('./productsRoute')
const usersRoute = require('./usersRoute')
const categoriesRoute = require('./categories')
const homeRouterrr = require('./homeRoute')


function routerApi(app) {
  // app.use('/routes/productsRoute.js', productsRouter)
  app.use('/products', productsRoute)
  app.use('/users', usersRoute)
  app.use('/categories', categoriesRoute)
  app.use('/home', homeRouterrr)
}



module.exports = routerApi
