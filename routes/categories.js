const express = require('express')
const faker = require('faker')

const categoriesRouter = express.Router()


categoriesRouter.get('/', (req, res) => {
  let categorie = []

  for (let index = 0; index < 3; index++) {
    categorie.push({
      categorie: faker.commerce.productName()
    })

  }

  res.json(categorie)
  // res.send("<h1>New Endpoint/Categories</h1>")
})


// categoriesRouter.get("/categories/:categoryid/products/:productsid", (req,res) => {
//   const { categoryid, productsid } = req.params;
//   res.json({
//     categoryid,
//     productsid
//   })
// })


module.exports = categoriesRouter
