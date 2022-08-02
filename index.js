const express = require('express')
const app = express()
const port = 3000
const faker = require('faker')
// const Faker = require('faker/lib')

app.get('/home', (req, res) => {
  res.send("<h1>My Server in Express //  HOME  </h1>")
})


app.get('/categories', (req, res) => {
  res.send("<h1>New Endpoint/Categories</h1>")
})


app.get("/categories/:categoryid/products/:productsid", (req,res) => {
  const { categoryid, productsid } = req.params;
  res.json({
    categoryid,
    productsid
  })
})


app.get('/products', (req, res) => {
  let products = []

  const {size} = req.query;

  const limit = size || 10

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products)
  // res.json([ {
  //   name: "Product One",
  //   price: "$15.350",
  //   text: "Responding in json format"
  // },
  // {
  //   name: "Product Two",
  //   price: "$20.350",
  //   text: "Product description"
  // }])
})
app.get('/products/filter', (req, res) => {
  res.send('FILTER')
})



app.get('/products/:id', (req,res)=> {
  const {id} = req.params
  res.json({
    id,
    name: "Product One",
    price: "$15.350",
    text: "Responding in json format"
  })
})



app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('<h1>the are not parameters</h1>')
  }
})



app.listen(port, () => {
  console.log(('Mi Port' +" "+ port));
})
