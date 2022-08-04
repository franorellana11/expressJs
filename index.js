const express = require('express')
const app = express()
const port = 3000
const routerApi = require('./routes/index')
const {errorHandler, logErrors} = require('./middlewares/error.handler')

app.use(express.json())

routerApi(app)

app.use(logErrors)
app.use(errorHandler)


app.listen(port, () => {
  console.log(('Mi Port' +" "+ port));
})
