import mongoose = require('mongoose');


import UserDoc = require('./models/user.model')
export const connectionString = 'mongodb://localhost:27017/test';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export const models = { UserDoc };
