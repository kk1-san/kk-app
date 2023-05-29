const express = require('express')
const productRoutes = express.Router()
const Product =require('../model/product')
 
productRoutes.get('', async function(req, res) {
    foundProducts = await Product.find({})
    res.json(foundProducts)
})

productRoutes.get('/:productId', async function(_req, res) {
    const productId = _req.params.productId
    foundProducts = await Product.findById(productId)
    res.json(foundProducts)
})
 
module.exports = productRoutes


