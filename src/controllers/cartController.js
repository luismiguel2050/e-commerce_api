const cartService = require('../services/cartService');

module.exports = {
  async createNew(req, res){
    const data =  await cartService.createNew(1)
    
    res.status(201).send(data)
  },

  async getCartById(req, res){
    const data =  await cartService.getCartById(1)
    
    res.status(201).send(data)
  },

  async findAll(req, res){
    const data = await cartService.findAll();
    
    res.send(data);
  },

  async updateCart(req, res){
    const data =  await cartService.updateCart(1);
    
    res.status(201).send(data)
  },

  async deleteCartById(req, res){
    const data =  await cartService.deleteCartById(1);
    
    res.status(201).send(data)
  }
}