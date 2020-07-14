const ROOT = require('./resources/root').ROOT;
const MONGO = require('./resources/mongo').MONGO;

//const mysql = require('./../resources/mysql');

import { ENV } from './app.env';

/**
 * 'dev' - for develop environment
 * 'pre' - for develop environment
 * 'pro' - for develop environment
 *
 * This variable can be taken from the environment variables
 */

const ENVIRONMENT = {
  isDevEnv: () => _env.toLowerCase() === 'development',
  isPreEnv: () => _env.toLowerCase() === 'test',
  isProEnv: () => _env.toLowerCase() === 'production',
};

const appConfig = () => {
  return {
    ...{
      app: ROOT[ENV],
    },
    ...{
      mongo: MONGO[ENV],
    },
    ...ENVIRONMENT,
  };
};

module.exports = appConfig;
