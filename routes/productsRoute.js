const express = require('express')
const faker = require('faker')

const router = express.Router()


router.get('/', (req, res) => {
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
})


router.get('/filter', (req, res) => {
  res.send('FILTER')
})

router.get('/:id', (req,res)=> {
  const {id} = req.params
  res.json({
    id,
    name: "Product One",
    price: "$15.350",
    text: "Responding in json format"
  })
})

///////////////////////////////////// POST METHOD ///////////////////

router.post('/', (req, res)=> {
  const body = req.body
  res.json({
    message: 'created',
    data: body
  })
})


///////////////////////////////// PATCH METHOD /////////////////////////

router.patch('/:id', (req, res)=> {
  const { id } = req.params
  const body = req.body
  res.json({
    message: 'update',
    data: body,
    id
  })
})


////////////////////////////// DELETE METHOD ////////////////////



router.delete('/:id', (req, res)=> {
  const { id } = req.params
  res.json({
    message: 'deleted',
    id
  })
})






module.exports = router


