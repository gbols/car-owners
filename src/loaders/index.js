import expressLoader from './express';
import mongooseLoader from  './mongoose';

 const init = async ({ expressApp }) => {
  await mongooseLoader();
  console.log('MongoDB initialized');
  await expressLoader({ app: expressApp });
  console.log('Express Initialized');
}

export { init };