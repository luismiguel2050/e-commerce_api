require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/db')

app.get('/', (req, res)=>{
  res.send('Welcome to e-commerce api!')
});



app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`)
});