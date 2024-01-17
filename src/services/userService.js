const User = require('../db/models/user');


module.exports = {
  async createNew(data){
    return 'nice ' + User.createNew(data);
  },

  async getUserById(data){
    return 'nice' + User.getUserById(data);
  },

  async findAll(){
    return User.findAll();
  },

  async updateUser(data){
    return 'nice' + data;
  },

  async deleteUserById(data){
    return 'nice' + data
  }
}