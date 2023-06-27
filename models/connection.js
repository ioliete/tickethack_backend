const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:xCsI2lmcEsCLaMrh@admin.ex14vjt.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));