//const UserService = require('../services/userService');

module.exports = {
  async registerUser(req, res) {
    // const {username, password, email, address, phone} = req.body;
    // const user = await UserService.getUserByEmail(email);

    // if(user){
    //   res.status(409).send('User with this email already exists!')

    // };

    // try {
    //   const newUser = await UserService.createUser(username, password, email, address, phone);
    //   res.status(201).json(newUser);
    // } catch(error){
    //   console.log('Error registering user', error);
    //   res.status(error.status || 500).json({error: error.message || 'Internal Server Error'});
    // }
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