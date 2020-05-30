import  csvtojson from 'csvtojson';
import mongooseInstance from '../loaders/mongoose';
import mongoose from 'mongoose';
import { User } from '../models'

const file = 'src/seeders/car_ownsers_data.csv';

const seedDatabase = async (file) => {
    try {
      const csvData = await csvtojson().fromFile(file);
      await mongooseInstance();
      await User.insertMany(csvData);
      console.log(`Inserted data successfully`);
      mongoose.connection.close();
    } catch (error) {
      throw error;
    }
  }

seedDatabase(file);