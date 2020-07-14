import { App } from './app';

const main = async () => {
  // INSTANCE APP
  const app = new App();
  // LISTEN APP
  await app.listen();
};

// EXECUTE APP
main();
