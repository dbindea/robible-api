const ROOT = require('./resources/root').ROOT;
const MONGO = require('./resources/mongo').MONGO;

import { ENV } from './app.env';

const ENVIRONMENT = {
  isLocEnv: () => _env.toLowerCase() === 'loc',
  isDevEnv: () => _env.toLowerCase() === 'develop',
  isProEnv: () => _env.toLowerCase() === 'master',
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
