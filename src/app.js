require('@babel/polyfill');
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import appConfig from './config/app.config';

const appRoutes = require('./api/app.routes')();

import middelwares from './middlewares/middlewares';

// EXPRESS SERVER
const app = express();

// HTTP ACCESS LOG
const morgan = require('morgan');

// DATABASE CONNECTIONS
//const mongoConnection = require('./config/db/mongo.connection');

export class App {
  constructor() {
    // INITIALIZE SETTINGS (host, port, app-variables, etc...)
    this.settings();

    // INSTANCE MIDDELWARE (body-parser, apollo, etc...)
    this.middelwares();

    // INSTANCE MONGODB CONNECTION
    //this.mongoConnection();

    // INSTANCE API-REST ROUTES
    this.routes();
  }

  /**
   * General settings
   */
  settings() {
    app.set('port', process.env.PORT || appConfig().app.port);
    app.set('host', process.env.HOST || appConfig().app.host);
  }

  /**
   * Apply middelwares
   */
  middelwares() {
    // BODY PARSER
    app.use(json());
    app.use(urlencoded({ extended: true }));

    // ENDPOINT ACCESS LOG
    app.use(morgan('dev'));

    // CORS
    app.use(cors());

    // CUSTOM MIDDLEWARES
    app.use('/api/', middelwares.initAppData);
    app.use('/api/', middelwares.getBible);
  }

  /**
   * Start Mongo connection
   */
  async mongoConnection() {
    return await mongoConnection;
  }

  /**
   * REST-API routes
   */
  routes() {
    app.get('/', function (req, res) {
      res.json(`Running...`);
    });
    app.use(`/api/v${appConfig().app.version}`, appRoutes);
  }

  /**
   * Listen app
   */
  async listen() {
    await app.listen(app.get('port'));
    console.log(`Running on port: ${app.get('port')}`);
    console.log(`Running api-rest running on http://${app.get('host')}:${app.get('port')}/api/v${appConfig().app.version}`);
  }
}
