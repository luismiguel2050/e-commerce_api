const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send('Welcome to e-commerce api!')
});

app.use('/api/users', require('./routes/userRoutes'));

module.exports = app;