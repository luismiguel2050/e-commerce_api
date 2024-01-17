const db = require('../../config/db');

class Cart {
  async createNew(data){
    return 'returned';
  }

  async getCartById(data){
    return 'returned ' + data;
  }

  async findAll(){
    return 'returned';
  }

  async updateCart(data){
    return 'returned ' + data;
  }

  async deleteCartById(data){
    return 'returned ' + data
  }
  
}

module.exports = Cart;