const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const cors = require('cors');



var productsRouter = require('./routes/products');
var ordersRouter = require('./routes/orders');
var usersRouter = require('./routes/users');




app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/users', usersRouter);






app.use(cors({
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'content-Type, Authorization, origin, X-Requested-with, Accept'

}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', productsRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);


module.exports = app;