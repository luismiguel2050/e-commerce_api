//const UserService = require('../services/userService');

module.exports = {
  async registerUser(req, res) {
   
    res.send('here you go')
  },

  async getUserById(req, res){
    res.send('here you go')
  },

  async findAll(req, res){
    console.log('something')
    res.send('here you go')
  },

  async updateUser(req, res){
    res.send('here you go')
  },

  async deleteUserById(req, res){
    res.send('here you go')
  }
}