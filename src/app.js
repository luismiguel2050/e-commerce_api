const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send('Welcome to e-commerce api!')
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/carts', require('./routes/cartRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('api/products', require('./routes/productRoutes'));

module.exports = app;