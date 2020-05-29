import { User } from '../models';

export default class UserService {
  static async getUserById(id) {
     return User.findOne({id});
  }
}