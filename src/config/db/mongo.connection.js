import appConfig from '../app.config';
import mongoose from 'mongoose';

/**
 * MONGO CONNECTION
 */
const models = require('../../shared/schema/index');
const mongoUrl = `mongodb://${appConfig().mongo.host}:${appConfig().mongo.port}/${appConfig().mongo.database}`;

mongoose
  .connect(mongoUrl, {
    connectTimeoutMS: 1000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log('Can not connect to Mongo Server:', mongoUrl);
    console.log('Error:', err);
  });

let mongodb = mongoose.connection;
module.exports = mongodb;

mongodb.once('open', () => {
  console.log('Connected to mongo at:', mongoUrl);
});
mongodb.on('error', (error) => {
  console.log('Error:', error);
});

module.exports = models;
