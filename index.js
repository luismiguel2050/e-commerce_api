const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res)=>{
  res.send('Welcome to e-commerce api!')
});

app.listen(port, ()=>{
  console.log(`Server listening on port ${port}`)
});