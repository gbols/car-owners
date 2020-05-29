import express from 'express';

import { init }  from './loaders';
const app = express();

(async () => {
  await init({ expressApp : app });
})();

export default app;


