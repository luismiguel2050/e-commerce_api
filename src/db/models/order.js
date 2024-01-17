const db = require('../../config/db');

class Order {
  async createNew(data){
    return 'returned';
  }

  async getOrderById(data){
    return 'returned ' + data;
  }

  async findAll(){
    return 'returned';
  }

  async updateOrder(data){
    return 'returned ' + data;
  }

  async deleteOrderById(data){
    return 'returned ' + data
  }
  
}

module.exports = Order;