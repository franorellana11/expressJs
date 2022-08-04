const express = require('express')
const faker = require('faker')


const router = express.Router()


const ProductsService = require('../services/productsService')

const service = new ProductsService()

//////////////////////////////// GET METHOD ///////////////////



router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
})

////////////////////////////////




// router.get('/filter', (req, res) => {
//   res.send('FILTER')
// })







router.get('/:id', async (req,res)=> {
  const {id} = req.params
  const product = await service.findOne(id)
  res.json(product)
})

///////////////////////////////////// POST METHOD ///////////////////

router.post('/', async (req, res)=> {
  const body = req.body
  const newProduct = await service.create(body)
  res.status(201).json({newProduct})
})


///////////////////////////////// PATCH METHOD /////////////////////////

router.patch('/:id', async (req, res)=> {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id,body)
    res.json({
      product
    })
  } catch (error) {
    res.status(404).json({
      message: "NOT FOUND"
    })
  }




})


////////////////////////////// DELETE METHOD ////////////////////



router.delete('/:id', async (req, res)=> {
  const { id } = req.params
  const rta = await service.delete(id)
  res.json({rta})
})



module.exports = router


