import mongoose from 'mongoose'
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
const dbString = config[environment];

console.log({dbString, environment});

export default async () => {
  const client = await mongoose.connect(dbString.databaseURI, { useNewUrlParser: true , useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log(`MongoDB connection successfully established`);
  });

  return client;
}