const  createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { MongoManager } = require('./src/mongo');
const api = require('./src/api');
const app = express();
let config;

config = require('./config/dev');
if (process.env.NODE_ENV === 'test')
  config = require('./config/test');
    
const mongoManager = new MongoManager(config);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
mongoManager.connect();

app.use('/api/v1', api(config));


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
