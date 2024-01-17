const db = require('../../config/db');

class User {
  async createNew(data){
    return 'returned';
  }

  async getUserById(data){
    return 'returned ' + data;
  }

  async findAll(){
    return 'returned';
  }

  async updateUser(data){
    return 'returned ' + data;
  }

  async deleteUserById(data){
    return 'returned ' + data
  }
  
}

module.exports = User;