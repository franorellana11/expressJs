const express = require('express')
const app = express()
const port = 3000


app.get('/home', (req, res) => {
  res.send("<h1>My Server in Express //  HOME  </h1>")
})


app.get('/categories', (req, res) => {
  res.send("<h1>New Endpoint/Categories</h1>")
})


app.get('/products', (req, res) => {
  res.json({
    name: "Product One",
    price: "$15.350",
    text: "Responding in json format"
  })
})



app.listen(port, () => {
  console.log(('Mi Port' +" "+ port));
})
