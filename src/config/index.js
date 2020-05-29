const dotenv = require('dotenv');
const envFound = dotenv.config();

if (!process.env.NODE_ENV==='production' && envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
  
export default {
  port: process.env.PORT,
  production: {
    databaseURI: process.env.DATABASE_URI_PROD,
  },
  development: {
    databaseURI: process.env.DATABASE_URI_DEV,
  },
  test: {
    databaseURI: process.env.DATABASE_URI_TEST,
  },
  apiPrefix: '/api/v1/'
}