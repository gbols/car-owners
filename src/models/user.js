import mongoose from 'mongoose';
 
const userSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    car_model: {
      type: String,
      required: true,
    },
    car_model_year: {
      type: Number,
      required: true,
    },
    car_color: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum : ['Male','Female'],
    },
    job_title: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
  });
 
const User = mongoose.model('User', userSchema);
 
export default User;