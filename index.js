const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send("My Server in Express")
})


app.listen(port, () => {
  console.log(('Mi Port' +" "+ port));
})

