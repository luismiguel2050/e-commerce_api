const db = require('../../config/db');

class Product {
  async createNew(data){
    return 'returned';
  }

  async getProductById(data){
    return 'returned ' + data;
  }

  async findAll(){
    return 'returned';
  }

  async updateProduct(data){
    return 'returned ' + data;
  }

  async deleteProductById(data){
    return 'returned ' + data
  }
  
}

module.exports = Product;