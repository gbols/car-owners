import { User } from '../models';

export default class UserService {
  static async getUserById(id) {
     return User.findOne({id});
  }

  static async filterCars(filter, skip = 0, limit = 10){
    skip = Number(skip);
    limit = Number(limit);
    
    return User.find(filter);
  }
}