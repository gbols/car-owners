import { User } from '../models';

export default class UserService {
  static async getUserById(id) {
     return User.findOne({id});
  }

  static async filterCars(filter, skip, limit){
    skip = Number(skip);
    limit = Number(limit);
    
    return User.find(filter).skip(skip * limit).limit(limit);
  }
}