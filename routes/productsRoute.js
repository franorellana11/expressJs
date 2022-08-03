const express = require('express')
const faker = require('faker')


const router = express.Router()


const ProductsService = require('../services/productsService')

const service = new ProductsService()

//////////////////////////////// GET METHOD ///////////////////



router.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})





// router.get('/filter', (req, res) => {
//   res.send('FILTER')
// })







router.get('/:id', (req,res)=> {
  const {id} = req.params
  const product = service.findOne(id)
  res.json(product)
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


