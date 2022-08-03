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


///////////////////////////////////// POST METHOD ///////////////////

categoriesRouter.post('/', (req, res)=> {
  const body = req.body
  res.json({
    message: 'created Categorie',
    data: body
  })
})


///////////////////////////////// PATCH METHOD /////////////////////////

categoriesRouter.patch('/:id', (req, res)=> {
  const { id } = req.params
  const body = req.body
  res.json({
    message: 'update Categorie',
    data: body,
    id
  })
})


////////////////////////////// DELETE METHOD ////////////////////



categoriesRouter.delete('/:id', (req, res)=> {
  const { id } = req.params
  res.json({
    message: 'deleted Categorie',
    id
  })
})





// categoriesRouter.get("/categories/:categoryid/products/:productsid", (req,res) => {
//   const { categoryid, productsid } = req.params;
//   res.json({
//     categoryid,
//     productsid
//   })
// })


module.exports = categoriesRouter
