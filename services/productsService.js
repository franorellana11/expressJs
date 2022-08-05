const faker = require('faker')
const boom = require('@hapi/boom')


class ProductsService {

  // Manejo transaccional de los productos.

  constructor() {
    this.products = []
    this.generate()
  }

  generate() {
  const limit = 10
  for (let index = 0; index < limit; index++) {
    this.products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
      block: faker.datatype.boolean()
    });
  }
  }
//////////////////////////////////////////////////////////////////////////////////

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }
/////////////////////////////////////////////////////////////////////////////////////

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 2000);
    })
    // return this.products
  }

///////////////////////////////////////////////////////////////////////////////////////


  async findOne(id) {
    const product = this.products.find(item => item.id === id)
    if (!product) {
      throw boom.notFound('Product Not Found')
    }
    if (product.block) {
      throw boom.conflict('Product Not Found')
    }
    return product
  }


////////////////////////////////////////////////////////////////////////////////////////

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('Product NOT FOUND')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }


////////////////////////////////////////////////////////////////////////////////////////

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('Product NOT FOUND')
    }
    this.products.splice(index, 1)
    return{id}
  }
}


module.exports = ProductsService


