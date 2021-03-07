const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
  path:`${__dirname}\\${process.env.NODE_ENV}.env`
});
module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000,
  MONGO_URL_DEV:process.env.MONGO_URL_DEV,
}